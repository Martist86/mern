import ITag from "./ITag";

export default interface IUser {
    _id?: string;
    email: string;
    firstName: string;
    lastName: string;   
    companyName: string;
    companyDescription: string;
    address: string;
    tags: ITag[];
    fopCode: string;
    logo: any;
}