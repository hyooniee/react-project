import { useContext, useRef, useState } from "react";
import { StyledButton } from "../../../../common/StyledButton/StyledButton";
import { StyledSelectBox } from "../../../../common/StyledSelectBox/StyledSelectBox";
import { StyledInput } from "../../../../common/StyledInput/StyledInput";
import { CommonCodeSearchStyled } from "./styled";
import { CommonCodeContext } from "../../../../../api/Provider/CommonCodeProvider";
import { useRecoilState } from "recoil";
import { modalState } from "../../../../../stores/modalState";

export const CommonCodeSearch = () => {
    const options = [
        { label: "그룹코드명", value: "groupName" },
        { label: "그룹코드", value: "groupCode" },
    ];
    const [modal, setModal] = useRecoilState(modalState);
    const [selectValue, setSelectValue] = useState<string>("groupName");

    const inputValue = useRef<HTMLInputElement>();

    const { setSearchKeyword } = useContext(CommonCodeContext);
    const handlerSearch = () => {
        setSearchKeyword({
            groupCodeSelect: selectValue,
            searchTitle: inputValue.current.value,
        });
    };

    return (
        <CommonCodeSearchStyled>
            <StyledSelectBox options={options} value={selectValue} onChange={setSelectValue} />
            <StyledInput ref={inputValue} />
            <StyledButton onClick={handlerSearch}>검색</StyledButton>
            <StyledButton onClick={() => setModal(!modal)}>등록</StyledButton>
        </CommonCodeSearchStyled>
    );
};
