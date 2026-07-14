import * as S from "./EditProductPageStyle";
import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDeleteProductMutation, useGetCategoriesQuery} from "@/api/productsApi.ts";
import {PATH} from "@/routes/paths.ts";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "@/hooks";
import {setNotification} from "@/app/appSlice.ts";

interface ProductFormProps {
    initialTitle?: string;
    initialDescription?: string;
    initialPrice?: number;
    initialImage?: string[];
    onSave: (data: { title: string; description: string; price: number; images: string[] }) => void;
    isEdit?: boolean;
    onDelete?: () => void;
    selectedCategory: number;
    setSelectedCategory: (id: number) => void;
    id?: number;
}

export const ProductForm: React.FC<ProductFormProps> = ({
                                                            initialTitle = "",
                                                            initialDescription = "",
                                                            initialPrice = 0,
                                                            initialImage = [""],
                                                            onSave,
                                                            isEdit = false,
                                                            onDelete,
                                                            selectedCategory,
                                                            setSelectedCategory,
                                                            id
                                                        }) => {
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [price, setPrice] = useState(initialPrice);
    const [image, setImage] = useState(initialImage);
    const navigate = useNavigate();
    const {data: categories, isLoading: categoriesLoading} = useGetCategoriesQuery();
    const {t} = useTranslation();
    const dispatch = useAppDispatch()
    const [deleteProduct] = useDeleteProductMutation()

    useEffect(() => {
        setTitle(initialTitle);
        setDescription(initialDescription);
        setPrice(initialPrice);
        setImage(initialImage);
    }, []);

    const handleSave = () => {
        onSave({title, description, price: Number(price), images: image});
    };
    const handleEnable = async () => {
        if (!id) return;
        try {
            await deleteProduct({id}).unwrap();
            dispatch(setNotification({message: t("The product has been successfully removed."), type: "success"}));
            navigate(PATH.HOME);
        } catch (err: unknown) {
            let message = t("Unknown Error");
            if (err && typeof err === "object" && "data" in err) {
                const e = err as { data?: { message?: string } };
                message = e.data?.message || message;
            }
            dispatch(setNotification({message, type: "error"}));
        }
    };
    return (
        <>
            <S.FormTitle>
                {isEdit ? t("Edit Product") : t("Create Product")}
            </S.FormTitle>

            <S.FormSection>
                <S.SectionTitle>
                    {t("Product information")}
                </S.SectionTitle>
                <S.FormField>
                    <S.FieldLabel>
                        {t("Product Name")}
                    </S.FieldLabel>

                    <S.Input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder={t("Enter the product name")}
                    />
                </S.FormField>

                <S.FormField>
                    <S.FieldLabel>
                        {t("Product Image URL")}
                    </S.FieldLabel>

                    <S.Input
                        value={image[0]}
                        onChange={e => setImage([e.target.value])}
                        placeholder={t("Enter image URL")}
                    />
                </S.FormField>

                <S.FormField>
                    <S.FieldLabel>
                        {t("Description")}
                    </S.FieldLabel>

                    <S.Textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={t("Enter a product description")}
                    />
                </S.FormField>
            </S.FormSection>

            <S.FormSection>
                <S.SectionTitle>
                    {t("Pricing")}
                </S.SectionTitle>

                <S.FormField>
                    <S.FieldLabel>
                        {t("Price")}
                    </S.FieldLabel>

                    <S.Input
                        type="number"
                        value={price === 0 ? "" : price}
                        onChange={e => setPrice(Number(e.target.value) || 0)}
                        placeholder={t("Enter the price")}
                    />
                </S.FormField>
            </S.FormSection>

            {!isEdit && (
                <S.FormSection>
                    <S.SectionTitle>
                        {t("Organization")}
                    </S.SectionTitle>

                    <S.FormField>
                        <S.FieldLabel>
                            {t("Category")}
                        </S.FieldLabel>

                        <S.Select
                            value={selectedCategory}
                            onChange={e =>
                                setSelectedCategory(Number(e.target.value))
                            }
                        >
                            {categoriesLoading && (
                                <option>
                                    {t("Loading...")}
                                </option>
                            )}

                            {categories?.map(cat => (
                                <option
                                    key={cat.id}
                                    value={cat.id}
                                >
                                    {cat.name}
                                </option>
                            ))}
                        </S.Select>
                    </S.FormField>
                </S.FormSection>
            )}

            <S.FormActions>

                {isEdit && onDelete && (
                    <S.DangerButton onClick={handleEnable}>
                        {t("Delete")}
                    </S.DangerButton>
                )}

                <S.ActionsGroup>

                    <S.SecondaryButton
                        onClick={() => navigate(-1)}
                    >
                        {t("Cancel")}
                    </S.SecondaryButton>

                    <S.PrimaryButton onClick={handleSave}>
                        {t("Save")}
                    </S.PrimaryButton>

                </S.ActionsGroup>

            </S.FormActions>
        </>
    );
};
