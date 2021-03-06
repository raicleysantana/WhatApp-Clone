import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Nome" style={{ fontSize: 20, height: 45 }} />
            <TextInput placeholder="E-Mail" style={{ fontSize: 20, height: 45 }} />
            <TextInput placeholder="Senha" style={{ fontSize: 20, height: 45 }} />
        </View>
        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
    </View>
);