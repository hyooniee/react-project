import React, { FC, useState, createContext } from "react";

/* interface ISearchKeyword {
    searchKeyword: object;
    setSearchKeyword: (keyword: object) => void;
} */

/* const defaultValue: ISearchKeyword = {
    searchKeyword: {},
    setSearchKeyword: () => {},
};
 */
//다른 컴포넌트에서 사용이 가능한 context를 만든다. 값을 제공해준다.
/* export const CommonCodeContext = createContext(defaultValue);

//만들어진 context를 컴포넌트에서 전달할 provider를 만든다.
export const CommonCodeProvider: FC<{
    children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
    const [searchKeyword, setSearchKeyword] = useState({});
    return (
        <CommonCodeContext.Provider value={{ searchKeyword, setSearchKeyword }}>{children}</CommonCodeContext.Provider>
    );
};
 */

//초기값의 타입
interface ISearchKeyword {
    searchKeyword?: object;

    setSearchKeyword?: React.Dispatch<React.SetStateAction<object>>;
}

//다른 컴포넌트에서 사용이 가능한 값을 만든다.
export const CommonCodeContext = createContext<ISearchKeyword>({});

//만들어진 값에 searchKeyword, setSearchKeyword을 넣어서 자식 노드
//자유롭게 searchKeyword와 setSearchKeyword를 호출한다.
export const CommonCodeProvider: FC<{
    children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
    const [searchKeyword, setSearchKeyword] = useState<object>({});
    return (
        <CommonCodeContext.Provider value={{ searchKeyword, setSearchKeyword }}>{children}</CommonCodeContext.Provider>
    );
};
