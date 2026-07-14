import {
    ChevronDown,
    ChevronUp,
    Mail,
    Phone,
    Calendar,
    Package
} from "lucide-react";

import * as S from "../../styles/AdminOrdersStyle"
import {useTranslation} from "react-i18next";
import {OrderDetails} from "@/features";
import type {OrderType} from "@/features/adminOrders/types/type.ts";

interface OrderCardComponentProps {
    order: OrderType;
    isOpen: boolean;
    onToggle: () => void;
    updateStatus: (
        id: string,
        status: string
    ) => Promise<void>;
    onDelete: (
        id: string
    ) => Promise<void>;
}

export const OrderCardComponent = ({
                                       order,
                                       isOpen,
                                       onToggle,
                                       updateStatus,
                                       onDelete
                                   }: OrderCardComponentProps) => {
    const {t} = useTranslation();

    return (
        <S.OrderCard>

            <S.OrderTop>

                <S.CustomerInfo>

                    <S.CustomerName>
                        {order.name}
                    </S.CustomerName>

                    <S.CustomerEmail>
                        <Mail size={16}/>
                        {order.email}
                    </S.CustomerEmail>

                    <S.CustomerPhone>
                        <Phone size={16}/>
                        {order.phone}
                    </S.CustomerPhone>

                </S.CustomerInfo>

                <S.OrderMeta>

                    <S.StatusBadge status={order.status}>
                        {t(order.status)}
                    </S.StatusBadge>

                    <S.OrderPrice>
                        {order.total} ₴
                    </S.OrderPrice>

                    <S.OrderItemsCount>
                        <Package size={16}/>
                        {order.products.length} {t("items")}
                    </S.OrderItemsCount>

                    <S.OrderDate>
                        <Calendar size={16}/>
                        {order.createdAt.toLocaleString()}
                    </S.OrderDate>

                </S.OrderMeta>

            </S.OrderTop>

            <S.OrderExpandButton onClick={onToggle}>
                {isOpen
                    ? <ChevronUp size={18}/>
                    : <ChevronDown size={18}/>
                }

                {isOpen
                    ? t("Hide details")
                    : t("Show details")
                }
            </S.OrderExpandButton>

            <OrderDetails
                onDelete={onDelete}
                order={order}
                isOpen={isOpen}
                updateStatus={updateStatus}
            />

        </S.OrderCard>
    );
};