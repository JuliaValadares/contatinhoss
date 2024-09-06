import { TouchableOpacity , Text } from "react-native"
import { styles } from './styles'
import { Avatar } from "../avatar"

export function Contact(){
    return <TouchableOpacity>
        <Avatar name="Pedroso" image={require("@/assets/avatar.jpeg")}/>
        <Text style={styles.name}>Pedroso</Text>

    </TouchableOpacity>
}
