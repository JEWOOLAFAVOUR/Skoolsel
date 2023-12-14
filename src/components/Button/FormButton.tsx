import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const FormButton = ({ title, onPress, btnStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, btnStyle]}>
            <Text style={{ ...FONTS.body3a, color: COLORS.white }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FormButton

const styles = StyleSheet.create({
    container: {
        height: SIZES.h1 * 1.8,
        borderRadius: SIZES.base,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        marginBottom: SIZES.h4,
    },
})