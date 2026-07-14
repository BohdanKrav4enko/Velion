import * as S from "./styles/CartPageStyle";

import {useAppDispatch, useAppSelector} from "@/components";

import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

import {ArrowLeft, Package, ShoppingCart, Trash2, Truck} from "lucide-react";

import {setNotification} from "@/app/appSlice.ts";
import {sendOrder} from "@/api/ordersApi.ts";
import {PATH} from "@/routes/paths.ts";
import {clearCart} from "@/app/cartSlice.ts";

import {CartItem} from "./CartItem";

export const CartPage = () => {
    const items = useAppSelector(
        state => state.cart.items
    );

    const user = useAppSelector(
        state => state.auth.user
    );

    const profile = useAppSelector(
        state => state.auth.profile
    );

    const dispatch = useAppDispatch();

    const {t} = useTranslation();

    const navigate = useNavigate();

    const total = items.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const prepareOrder = () => {
        const products = items.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }));

        return {
            name: profile?.name ?? "Anonymous",
            email: profile?.email ?? "anonymous@mail.com",
            phone: profile?.phone ?? "Unknown",
            products,
            total,
            date: new Date().toISOString()
        };
    };

    const handleOrder = () => {
        const order = prepareOrder();

        if (!user) {
            navigate(PATH.AUTH_PAGE, {
                state: {
                    from: location.pathname,
                }});
            return;
        }

        sendOrder(order)
            .then(() => {
                dispatch(
                    setNotification({
                        message: t("The order has been sent successfully"),
                        type: "success",
                        duration: 1500
                    })
                );

                dispatch(clearCart());
            })
            .catch((error: Error) => {
                dispatch(
                    setNotification({
                        message:
                            error.message ||
                            t("Something went wrong"),
                        type: "error",
                        duration: 1500
                    })
                );
            });
    };

    if (items.length === 0) {
        return (
            <S.EmptyCartContainer>

                <S.EmptyIcon>
                    <ShoppingCart size={96}/>
                </S.EmptyIcon>

                <S.EmptyTitle>
                    {t("Your cart is empty")}
                </S.EmptyTitle>
                <S.EmptyDescription>
                    {t(
                        "Looks like you haven't added any products yet."
                    )}
                </S.EmptyDescription>

                <S.ContinueShoppingButton
                    onClick={() =>
                        navigate(PATH.HOME)
                    }
                >
                    {t("Start shopping")}
                </S.ContinueShoppingButton>

            </S.EmptyCartContainer>
        );
    }

    return (
        <S.CartPageContainer>

            <S.CartHeader>

                <div>
                    <S.CartTitle>
                        {t("Shopping Cart")}
                    </S.CartTitle>
                    <S.BackButton
                        onClick={() => navigate(PATH.HOME)}
                    >
                        <ArrowLeft size={18}/>
                        {t("Continue shopping")}
                    </S.BackButton>
                    <S.CartSubtitle>
                        {t("Review your selection before completing your order.")}
                    </S.CartSubtitle>
                </div>

            </S.CartHeader>

            <S.CartLayout>

                <S.CartItems>

                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
                    ))}

                </S.CartItems>

                <S.OrderSummary>

                    <S.SummaryTitle>
                        {t("Order Summary")}
                    </S.SummaryTitle>

                    <S.SummaryRow>
                        <span>
                            <Package size={16}/>
                            {t("Products")}
                        </span>

                        <span>
                            {items.length}
                        </span>
                    </S.SummaryRow>

                    <S.SummaryRow>
                        <span>
                            <Truck size={16}/>
                            {t("Delivery")}
                        </span>

                        <span>
                            {t("Free")}
                        </span>
                    </S.SummaryRow>

                    <S.SummaryTotal>
                        <span>
                            {t("Total")}
                        </span>

                        <S.TotalPrice>
                            <span>{total.toFixed(2).toLocaleString()}</span>
                            <S.Currency>₴</S.Currency>
                        </S.TotalPrice>
                    </S.SummaryTotal>

                    <S.CheckoutButton
                        onClick={handleOrder}
                    >
                        {t("Place an order")}
                    </S.CheckoutButton>

                    <S.ClearButton
                        onClick={() =>
                            dispatch(clearCart())
                        }
                    >
                        <Trash2 size={18}/>
                        {t("Clear cart")}
                    </S.ClearButton>

                </S.OrderSummary>

            </S.CartLayout>

        </S.CartPageContainer>
    );
};