import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";
import { Text, View } from "react-native";
import { style } from "./styles";

type Props = {
    title: string;
    description: string;
    icon?: React.ComponentType<IconProps>;
}

export function Step({icon: Icon, title, description}: Props) {
    return (
        <View style={style.container}>
            {Icon && 
                <Icon size={32} color={colors.red.base} />
            }
            <View style={style.details}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.description}>{description}</Text>
            </View>
        </View>
    );
}