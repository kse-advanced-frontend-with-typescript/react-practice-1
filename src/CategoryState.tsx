import React, {createContext, useState} from 'react';

export const SelectedCategory = createContext<{
    data: string[]
    setData: (data: string[]) => void
}>({
    data: [],
    setData: () => {}
});

export const CategoryState: React.FC<{ children: React.ReactElement}> = ({ children}) => {
    const [categories, setCategories] = useState<string[]>([]);

    return <SelectedCategory.Provider value={{
            data: categories,
            setData: (newCategories) => {setCategories(newCategories);}
        }}>
        {children}
    </SelectedCategory.Provider>;
};
