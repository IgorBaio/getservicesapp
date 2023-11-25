import { Dimensions } from "react-native"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const baseWidth = 360
const baseHeight = 800

const scaleWidth = SCREEN_WIDTH / baseWidth
const scaleHeight = SCREEN_HEIGHT / baseHeight
const scale = Math.min(scaleWidth, scaleHeight)

export const scaledSize = (size: number) => Math.ceil(size * scale)

export const colors = {
    whitePrimary: '#FFF',
    transparent: 'transparent',
    grayPrimary: '#F2F2F2',
    violetPrimary: '#5E50A1',
    blackPrimary: '#000',
}

export const fonts = {
    xSmallFontSize: scaledSize(8),
    smallFontSize: scaledSize(10),
    mediumSmallFontSize: scaledSize(12),
    mediumFontSize: scaledSize(13),
    mediumLargeFontSize: scaledSize(14),
    largeFontSize: scaledSize(16),
    xLargeFontSize: scaledSize(20),
}

const theme = {
    colors,
    page: {
        padding: scaledSize(16),
        border: 8,
        backgroundColorWhite: colors.whitePrimary,
    },
    fonts,
    padding: {
        small: scaledSize(8),
        medium: scaledSize(16),
        large: scaledSize(24),
        xlarge: scaledSize(32),
    },
}

export default theme