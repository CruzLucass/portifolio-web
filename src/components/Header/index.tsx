import React, { useContext } from 'react'
import { Container, ItemMenu, Logo, ContainerMenu } from './styles'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { shade } from 'polished'

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <Logo>LC</Logo>

            <ContainerMenu>
                <ItemMenu href='#'>sobre</ItemMenu>
                <ItemMenu href='#'>projetos</ItemMenu>
                <ItemMenu href='#'>contato</ItemMenu>
            </ContainerMenu>

            <Switch
                onChange={toggleTheme}
                checked={title == 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.off)}
                onColor={colors.on}
            />

        </Container>
    )
}

export default Header