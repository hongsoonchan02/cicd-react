import { useParams } from "react-router-dom"
import { useNoticeDetailQuery } from "../query/noticeDetailQuery";


export const useNoticeEditHook = () => {

    const { id } = useParams();
    const { data, isLoading, isError, error } = useNoticeDetailQuery(id);

    return{data}
}  