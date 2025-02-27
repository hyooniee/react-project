import { ContentBox } from "../../components/common/ContentBox/ContentBox";
import { NoticeMain } from "../../components/page/Management/Notice/NoticeMain/NoticeMain";
import { NoticeSearch } from "../../components/page/Management/Notice/NoticeSearch/NoticeSearch";

export const Notice = () => {
    return (
        <>
            <ContentBox variant='primary' fontSize='large'>
                공지사항 {/* children */}
            </ContentBox>
            <NoticeSearch />
            <NoticeMain />
        </>
    );
};

//reactNode :children 돔안에 있는 태그, string, 다 포함 reactElement:태그들만 가능
