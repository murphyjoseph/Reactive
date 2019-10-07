import { useEffect } from "react";

export const debugChange = (name: string, value: any) => useEffect(() => console.log(name + " changed"), [value]);