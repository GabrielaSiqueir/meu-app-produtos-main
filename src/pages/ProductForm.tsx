import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Paper, Box, Typography } from '@mui/material';
import { createProduct, getProduct, updateProduct, Product } from '../services/api';

const initialState: Product = {
  nome: '',
  preco: 0
};

export default function ProductForm() {
  const [product, setProduct] = useState<Product>(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProduct(Number(id))
        .then(res => setProduct(res.data))
        .catch(() => alert('Produto não encontrado'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateProduct(Number(id), product);
        alert('Produto atualizado com sucesso!');
      } else {
        await createProduct(product);
        alert('Produto criado com sucesso!');
      }
      navigate('/');
    } catch (error) {
      alert('Erro ao salvar o produto');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h5" gutterBottom>
        {id ? 'Editar Produto' : 'Novo Produto'}
      </Typography>
      {loading ? (
        <Typography>Carregando...</Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            name="nome"
            value={product.nome}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Preço"
            name="preco"
            type="number"
            value={product.preco}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            {id ? 'Atualizar' : 'Criar'}
          </Button>
        </Box>
      )}
    </Paper>
  );
}