"use client";
import React from "react";
import { CategoryContextValue } from "@/lib/types/types";

const CategoryContext = React.createContext<CategoryContextValue | null>(null);

export const useCategory = (): CategoryContextValue | null => React.useContext(CategoryContext);

export default CategoryContext;
