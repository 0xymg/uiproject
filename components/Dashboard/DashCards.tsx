import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react";

interface CardProps {
    title: string;
    footer: string;
    content: React.ReactElement<LucideIcon>
}


const DashCards = ({ title, content, footer } : CardProps) => {
    return (
        <Card className="w-[250px]">
            <CardHeader className="justify-center items-center">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="justify-center items-center">
                {content}
            </CardContent>
            <CardFooter className="justify-center items-center">
                <h4>{footer}</h4>
            </CardFooter>
        </Card>
    );
}

export default DashCards;