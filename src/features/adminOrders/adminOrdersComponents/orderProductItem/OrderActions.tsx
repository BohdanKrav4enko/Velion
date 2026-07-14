import * as S from "../../styles/AdminOrdersStyle";
import {useTranslation} from "react-i18next";

interface OrderActionsProps {
    id: string;
    updateStatus: (id: string, status: string) => void;
    onDelete: (id: string) => void;
}

export const OrderActions = ({
                                 id,
                                 updateStatus,
                                 onDelete,
                             }: OrderActionsProps) => {
    const {t} = useTranslation();

    return (
        <S.ActionsContainer>

            <S.ActionsGroup>

                <S.StatusButton
                    variant="new"
                    onClick={() => updateStatus(id, "New")}
                >
                    {t("New")}
                </S.StatusButton>

                <S.StatusButton
                    variant="processing"
                    onClick={() => updateStatus(id, "Processing")}
                >
                    {t("Processing")}
                </S.StatusButton>

                <S.StatusButton
                    variant="completed"
                    onClick={() => updateStatus(id, "Completed")}
                >
                    {t("Completed")}
                </S.StatusButton>

                <S.StatusButton
                    variant="cancelled"
                    onClick={() => updateStatus(id, "Cancelled")}
                >
                    {t("Cancelled")}
                </S.StatusButton>

            </S.ActionsGroup>

            <S.DeleteButton onClick={() => onDelete(id)}>
                {t("Delete")}
            </S.DeleteButton>

        </S.ActionsContainer>
    );
};