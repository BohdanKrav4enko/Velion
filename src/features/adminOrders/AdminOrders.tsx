import {useState} from "react";
import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "@/app/firebase/firebase";
import {useAppDispatch} from "@/components";
import {useOrders} from "@/hooks/useOrders";
import {setNotification} from "@/app/appSlice";
import {useTranslation} from "react-i18next";

import {CheckCircle2, ClipboardList, LoaderCircle, Package, XCircle,} from "lucide-react";

import * as S from "./styles/AdminOrdersStyle";
import {OrderCardComponent} from "@/features";
import {OrderHeader} from "@/pages/ordersPage/ordersPageComponents/OrderHeader";

export const AdminOrders = () => {
    const orders = useOrders();

    const [openOrders, setOpenOrders] = useState<Record<string, boolean>>({});

    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const updateStatus = async (
        id: string,
        status: string
    ) => {
        try {
            await updateDoc(
                doc(db, "orders", id),
                { status }
            );
        } catch (err) {
            dispatch(
                setNotification({
                    type: "error",
                    message:
                        t("Update error consequences") +
                        `: ${err}`,
                })
            );
        }
    };

    const handleDeleteOrder = async (id: string) => {
        try {
            await deleteDoc(doc(db, "orders", id));

            dispatch(
                setNotification({
                    type: "success",
                    message: t("Order deleted"),
                })
            );
        } catch (err) {
            dispatch(
                setNotification({
                    type: "error",
                    message:
                        t("Error deleting order") +
                        `: ${err}`,
                })
            );
        }
    };

    const totalOrders = orders.length;
    const newOrders = orders.filter(
        order => order.status === "New"
    ).length;

    const processingOrders = orders.filter(
        order => order.status === "Processing"
    ).length;

    const completedOrders = orders.filter(
        order => order.status === "Completed"
    ).length;

    const cancelledOrders = orders.filter(
        order => order.status === "Cancelled"
    ).length;

    return (
        <S.OrdersContainer>

            <S.OrdersHeader>

                <S.OrdersTitleWrapper>

                    <S.OrdersTitle>
                        {t("Orders")}
                    </S.OrdersTitle>

                    <S.OrdersSubtitle>
                        {t(
                            "Manage customer orders and update delivery statuses."
                        )}
                    </S.OrdersSubtitle>

                </S.OrdersTitleWrapper>

            </S.OrdersHeader>

            <S.StatsGrid>

                <S.StatCard>
                    <ClipboardList size={26} />

                    <S.StatValue>
                        {totalOrders}
                    </S.StatValue>

                    <S.StatLabel>
                        {t("Total")}
                    </S.StatLabel>
                </S.StatCard>

                <S.StatCard>
                    <Package size={26} />

                    <S.StatValue>
                        {newOrders}
                    </S.StatValue>

                    <S.StatLabel>
                        {t("New")}
                    </S.StatLabel>
                </S.StatCard>

                <S.StatCard>
                    <LoaderCircle size={26} />

                    <S.StatValue>
                        {processingOrders}
                    </S.StatValue>

                    <S.StatLabel>
                        {t("Processing")}
                    </S.StatLabel>
                </S.StatCard>

                <S.StatCard>
                    <CheckCircle2 size={26} />

                    <S.StatValue>
                        {completedOrders}
                    </S.StatValue>

                    <S.StatLabel>
                        {t("Completed")}
                    </S.StatLabel>
                </S.StatCard>

                <S.StatCard>
                    <XCircle size={26} />

                    <S.StatValue>
                        {cancelledOrders}
                    </S.StatValue>

                    <S.StatLabel>
                        {t("Cancelled")}
                    </S.StatLabel>
                </S.StatCard>

            </S.StatsGrid>

            <OrderHeader />

            {orders.map(order => (
                <OrderCardComponent
                    key={order.id}
                    order={order}
                    isOpen={!!openOrders[order.id]}
                    onToggle={() =>
                        setOpenOrders(prev => ({
                            ...prev,
                            [order.id]: !prev[order.id],
                        }))
                    }
                    updateStatus={updateStatus}
                    onDelete={handleDeleteOrder}
                />
            ))}

            {orders.length === 0 && (
                <S.EmptyOrdersWrapper>

                    <Package
                        size={64}
                        color="#9ca3af"
                    />

                    <S.EmptyOrdersTitle>
                        {t("No orders yet")}
                    </S.EmptyOrdersTitle>

                    <S.EmptyOrdersSubtitle>
                        {t(
                            "Orders will appear here automatically when customers place them."
                        )}
                    </S.EmptyOrdersSubtitle>

                </S.EmptyOrdersWrapper>
            )}

        </S.OrdersContainer>
    );
};