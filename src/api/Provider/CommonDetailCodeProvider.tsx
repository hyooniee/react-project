import { FC, createContext, useState } from "react";

//초기값의 타입
interface ISearchKeyword {
    searchKeyword?: object;

    setSearchKeyword?: React.Dispatch<React.SetStateAction<object>>;
}

//지정된 곳 아무데서나 사용가능한 context를 생성(생성만 하고, 사용은 아직)
export const CommonDetailCodeContext = createContext<ISearchKeyword>({});
//provider를 사용해서 context에 값을 넣어주고, 원하는 곳에 제공할 수 있게함
export const CommonDetailCodeProvider: FC<{ children: React.ReactNode | React.ReactNode[] }> = ({ children }) => {
    const [searchKeyword, setSearchKeyword] = useState({});

    return (
        <CommonDetailCodeContext.Provider value={{ searchKeyword, setSearchKeyword }}>
            {children}
        </CommonDetailCodeContext.Provider>
    );
};
