import { useContext, useRef, useState } from "react";
import { StyledButton } from "../../../../common/StyledButton/StyledButton";
import { StyledInput } from "../../../../common/StyledInput/StyledInput";
import { StyledSelectBox } from "../../../../common/StyledSelectBox/StyledSelectBox";
import { DetailSearchStyled } from "./styled";
import { CommonDetailCodeContext } from "../../../../../api/Provider/CommonDetailCodeProvider";

export const DetailSearch = () => {
    const [selectValue, setSelectValue] = useState<string>("detailCodeName");
    const inputValue = useRef<HTMLInputElement>();

    const { setSearchKeyword } = useContext(CommonDetailCodeContext);

    const options = [
        { label: "그룹코드명", value: "detailCodeName" },
        { label: "그룹코드", value: "detailCode" },
    ];

    const handlerSearch = () => {
        setSearchKeyword({ detailCodeSearchTitle: inputValue.current.value, detailCodeSelect: selectValue });
    };
    return (
        <DetailSearchStyled>
            <StyledSelectBox options={options} value={selectValue} onChange={setSelectValue} />
            <StyledInput ref={inputValue} />
            <StyledButton onClick={handlerSearch}>검색</StyledButton>
            <StyledButton>등록</StyledButton>
        </DetailSearchStyled>
    );
};
