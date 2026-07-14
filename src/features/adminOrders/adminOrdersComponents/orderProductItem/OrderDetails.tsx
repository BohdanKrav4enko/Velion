import * as S from "../../styles/AdminOrdersStyle"

import {Calendar, Package, Phone,} from "lucide-react";

import {useTranslation} from "react-i18next";
import type {OrderType} from "@/features/adminOrders/types/type.ts";
import {OrderActions, OrderProductItem} from "@/features";

interface OrderDetailsProps {
    order: OrderType;
    isOpen: boolean;
    onDelete: (id: string) => void;
    updateStatus: (id: string, status: string) => void;
}

export const OrderDetails = ({
                                 order,
                                 isOpen,
                                 onDelete,
                                 updateStatus,
                             }: OrderDetailsProps) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <>
            <S.OrderSection>

                <S.SectionTitle>
                    <Package size={18}/>
                    {t("Products")}
                </S.SectionTitle>

                {order.products.map(product => (
                    <OrderProductItem
                        key={product.id}
                        {...product}
                    />
                ))}

            </S.OrderSection>

            <S.OrderSection>

                <S.SectionTitle>
                    {t("Order Information")}
                </S.SectionTitle>

                <S.OrderInfoGrid>

                    <S.InfoItem>
                        <S.InfoLabel>
                            {t("Phone")}
                        </S.InfoLabel>

                        <S.InfoValue>
                            <Phone size={16}/>
                            {order.phone}
                        </S.InfoValue>
                    </S.InfoItem>

                    <S.InfoItem>
                        <S.InfoLabel>
                            {t("Date")}
                        </S.InfoLabel>

                        <S.InfoValue>
                            <Calendar size={16}/>
                            {order.createdAt.toLocaleString()}
                        </S.InfoValue>
                    </S.InfoItem>

                    <S.InfoItem>
                        <S.InfoLabel>
                            {t("Status")}
                        </S.InfoLabel>

                        <S.StatusBadge status={order.status}>
                            {t(order.status)}
                        </S.StatusBadge>
                    </S.InfoItem>

                    <S.InfoItem>
                        <S.InfoLabel>
                            {t("Total")}
                        </S.InfoLabel>

                        <S.InfoValue>
                            {order.total} ₴
                        </S.InfoValue>
                    </S.InfoItem>

                </S.OrderInfoGrid>

            </S.OrderSection>

            <S.OrderSection>

                <S.SectionTitle>
                    {t("Order Status")}
                </S.SectionTitle>

                <OrderActions
                    id={order.id}
                    updateStatus={updateStatus}
                    onDelete={onDelete}
                />

            </S.OrderSection>
        </>
    );
};