import { ScrollView, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard'

export default function CocktailContainer() {


    return (
        <ScrollView>
            <CocktailCard />
        </ScrollView>
    )
}