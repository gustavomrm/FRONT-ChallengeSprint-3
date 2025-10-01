import { useState, useCallback } from 'react';
import type { TeleconsultaFormData } from '../types';

export const useTeleconsultaForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<TeleconsultaFormData>({
    name: '',
    email: '',
    whatsapp: '',
    cpf: '',
    diaehora: '',
    especialista: ''
  });

  const openForm = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const updateFormData = useCallback((field: keyof TeleconsultaFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      cpf: '',
      diaehora: '',
      especialista: ''
    });
  }, []);

  const getMinDateTime = useCallback((): string => {
    const now = new Date();

    if (now.getHours() < 8) {
      now.setHours(8, 0, 0, 0);
    } else if (now.getHours() >= 18) {
      now.setDate(now.getDate() + 1);
      now.setHours(8, 0, 0, 0);
    }

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }, []);

  const setMaxDateTime = useCallback((value: string): string => {
    if (!value) return '';
    
    const selectedDate = new Date(value);
    selectedDate.setHours(18, 0, 0, 0);
    return selectedDate.toISOString().slice(0, 16);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    alert("Tudo certo! Agora você não precisa mais entrar no site. Todas as informações serão enviadas diretamente para seu WhatsApp. Você receberá notificações semanais e, no dia da consulta, enviaremos um lembrete com um botão para entrar diretamente na sala com o médico. 😊");
    closeForm();
    resetForm();
  }, [closeForm, resetForm]);

  return {
    isOpen,
    formData,
    openForm,
    closeForm,
    updateFormData,
    resetForm,
    getMinDateTime,
    setMaxDateTime,
    handleSubmit
  };
};
