import { useContext, useEffect, useState } from "react";
import { CommonCodeMainStyled } from "./styled";
import { CommonCodeContext } from "../../../../../api/Provider/CommonCodeProvider";
import axios, { AxiosResponse } from "axios";
import { StyledButton } from "../../../../common/StyledButton/StyledButton";
import { modalState } from "../../../../../stores/modalState";
import { useRecoilState } from "recoil";
import { Modal } from "react-bootstrap";
import { CommonCodeModal } from "../CommonCodeModal/CommonCodeModal";
import { Portal } from "../../../../common/potal/Portal";
import { useNavigate } from "react-router-dom";
import { searchApi } from "../../../../../api/CommonCodeApi/searchApi";

interface ICommonCode {
    groupIdx: number;
    groupCode: string;
    groupName: string;
    useYn: string;
    createdDate: string;
    author: string;
    note: string;
}

interface ICommonCodeResponse {
    commonCode: ICommonCode[];
    commonCodeCnt: number;
}

export const CommonCodeMain = () => {
    const { searchKeyword } = useContext(CommonCodeContext);
    const [commonCodeList, setCommonCodeList] = useState<ICommonCode[]>();
    const [modal, setModal] = useRecoilState(modalState);
    const [groupId, setGroupId] = useState<number>(0);
    const navigate = useNavigate();

    const columns = [
        { key: "groupIdx", title: "번호" },
        { key: "groupCode", title: "그룹코드" },
        { key: "groupName", title: "그룹코드명" },
        { key: "note", title: "번호" },
        { key", title: "번호" },
        { key: "groupIdx", title: "번호" },
    ] as Column;

    useEffect(() => {
        searchCommonCode();
    }, [searchKeyword]);

    const searchCommonCode = async (currentPage?: number) => {
        currentPage = currentPage || 1;

        const result = await searchApi<ICommonCodeResponse>("/management/commonCodeListBody.do", {
            ...searchKeyword,
            pageSize: 5,
            currentPage,
        });

        if (result) {
            setCommonCodeList(result.commonCode);
        }
    };

    const postSuccess = () => {
        setModal(!modal);
        searchCommonCode();
    };

    const handlerModal = (id: number) => {
        setGroupId(id);
        setModal(!modal);
    };

    return (
        <CommonCodeMainStyled>
            <table>
                <colgroup>
                    <col style={{ width: "5%" }} />
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "8%" }} />
                    <col style={{ width: "5%" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>그룹코드</th>
                        <th>그룹코드명</th>
                        <th>그룹코드설명</th>
                        <th>등록일</th>
                        <th>사용여부</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    {commonCodeList?.length > 0 ? (
                        commonCodeList.map((commonCode) => {
                            return (
                                <tr key={commonCode.groupIdx}>
                                    <td>{commonCode.groupIdx}</td>
                                    <td
                                        className='td-pointer'
                                        onClick={() => {
                                            navigate(`${commonCode.groupIdx}`, {
                                                state: {
                                                    groupCode: commonCode.groupCode,
                                                },
                                            });
                                        }}
                                    >
                                        {commonCode.groupCode}
                                    </td>
                                    <td>{commonCode.groupName}</td>
                                    <td>{commonCode.note}</td>
                                    <td>{commonCode.createdDate}</td>
                                    <td>{commonCode.useYn}</td>
                                    <td>
                                        <StyledButton
                                            onClick={() => {
                                                handlerModal(commonCode.groupIdx);
                                            }}
                                        >
                                            수정
                                        </StyledButton>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={7}>조회결과가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {modal && (
                <Portal>
                    <CommonCodeModal groupId={groupId} postSuccess={postSuccess} setGroupId={setGroupId} />
                </Portal>
            )}
        </CommonCodeMainStyled>
    );
};
