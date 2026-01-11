import DetailHeader from "@/app/components/DetailHeader";
export default function WorksLayout({children}){
    return(
        <>
        <DetailHeader />
        {children}
        </>
    );
}