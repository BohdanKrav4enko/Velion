import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "./hooks.ts";
import { setNotification } from "@/app/appSlice.ts";
import {
    useGetProductBySlugQuery,
    useUpdateProductMutation,
    useCreateProductMutation,
} from "@/api/productsApi.ts";
import { useTranslation } from "react-i18next";

export const useEditProduct = () => {
    const dispatch = useAppDispatch();

    const { slug } = useParams();

    const isEdit = Boolean(slug);

    const navigate = useNavigate();

    const { t } = useTranslation();

    const { data: product, isLoading } =
        useGetProductBySlugQuery(
            { slug: slug! },
            { skip: !isEdit }
        );

    const [updateProduct] = useUpdateProductMutation();
    const [createProduct] = useCreateProductMutation();

    const [isOpenModal, setIsOpenModal] =
        useState(false);

    const [selectedCategory, setSelectedCategory] =
        useState(product?.category?.id || 1);

    const handleSave = async (
        data: {
            title: string;
            description: string;
            price: number;
            images: string[];
        }
    ) => {
        try {
            if (isEdit && product) {
                await updateProduct({
                    id: product.id,
                    ...data,
                }).unwrap();

                dispatch(
                    setNotification({
                        message: t(
                            "Product changed successfully"
                        ),
                        type: "success",
                    })
                );

                navigate(
                    `/product/${product.slug}`
                );
            } else {
                await createProduct({
                    ...data,
                    categoryId: selectedCategory,
                }).unwrap();

                dispatch(
                    setNotification({
                        message: t(
                            "Product added successfully"
                        ),
                        type: "success",
                    })
                );

                navigate("/");
            }
        } catch (err: unknown) {
            let message = "Unknown Error";

            if (
                err &&
                typeof err === "object" &&
                "data" in err
            ) {
                const e = err as {
                    data?: {
                        message?: string;
                    };
                };

                message =
                    e.data?.message || message;
            }

            dispatch(
                setNotification({
                    message,
                    type: "error",
                })
            );
        }
    };

    const handleDelete = () =>
        setIsOpenModal(true);

    return {
        product,
        isLoading,
        isEdit,
        isOpenModal,
        selectedCategory,
        setSelectedCategory,
        handleSave,
        handleDelete,
        setIsOpenModal,
    };
};