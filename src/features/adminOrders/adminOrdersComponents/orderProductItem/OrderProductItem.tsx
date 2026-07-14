import * as S from "../../styles/AdminOrdersStyle"

interface OrderProductItemProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image?: string;
}

export const OrderProductItem = ({
                                     title,
                                     price,
                                     quantity,
                                     image,
                                 }: OrderProductItemProps) => {

    return (
        <S.ProductCard>

            <S.ProductLeft>

                {image && (
                    <S.ProductImage
                        src={image}
                        alt={title}
                    />
                )}

                <S.ProductInfo>
                    <S.ProductTitle>
                        {title}
                    </S.ProductTitle>

                    <S.ProductMeta>
                        {price} ₴ × {quantity}
                    </S.ProductMeta>
                </S.ProductInfo>

            </S.ProductLeft>

            <S.ProductTotal>
                {(price * quantity).toLocaleString()} ₴
            </S.ProductTotal>

        </S.ProductCard>
    );
};