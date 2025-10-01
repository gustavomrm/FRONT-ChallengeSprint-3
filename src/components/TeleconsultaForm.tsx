import React, { useEffect } from 'react';
import type { TeleconsultaFormData } from '../types';
import { ESPECIALISTAS } from '../data/constants';

interface TeleconsultaFormProps {
  isOpen: boolean;
  formData: TeleconsultaFormData;
  onClose: () => void;
  onUpdateFormData: (field: keyof TeleconsultaFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  getMinDateTime: () => string;
  setMaxDateTime: (value: string) => string;
}

const TeleconsultaForm: React.FC<TeleconsultaFormProps> = ({
  isOpen,
  formData,
  onClose,
  onUpdateFormData,
  onSubmit,
  getMinDateTime,
  setMaxDateTime
}) => {
  useEffect(() => {
    if (isOpen) {
      const minDateTime = getMinDateTime();
      onUpdateFormData('diaehora', minDateTime);
    }
  }, [isOpen, getMinDateTime, onUpdateFormData]);

  const handleDateTimeChange = (value: string) => {
    onUpdateFormData('diaehora', value);
    const maxDateTime = setMaxDateTime(value);
    const input = document.getElementById('diaehora') as HTMLInputElement;
    if (input) {
      input.max = maxDateTime;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl animate-slide-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 transform hover:scale-110 z-10"
        >
          ✕
        </button>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-3xl">
          <h2 className="text-2xl font-bold text-center">Agende sua Teleconsulta</h2>
          <p className="text-center text-white/90 mt-2">Preencha os dados abaixo para marcar sua consulta</p>
        </div>
        
        {/* Form */}
        <div className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Digite seu nome completo..."
                pattern="[A-Za-zÀ-ÿ\s]+"
                title="Digite apenas letras."
                value={formData.name}
                onChange={(e) => onUpdateFormData('name', e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Digite seu email..."
                value={formData.email}
                onChange={(e) => onUpdateFormData('email', e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                placeholder="Digite seu número (11 dígitos)..."
                pattern="\d{11}"
                maxLength={11}
                title="Digite 11 números, apenas dígitos (ex: 11999999999)"
                value={formData.whatsapp}
                onChange={(e) => onUpdateFormData('whatsapp', e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-semibold text-gray-700 mb-2">
                CPF
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                required
                placeholder="Digite seu CPF (11 dígitos)..."
                pattern="\d{11}"
                maxLength={11}
                title="Digite 11 números, apenas dígitos (ex: 12345678900)"
                value={formData.cpf}
                onChange={(e) => onUpdateFormData('cpf', e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="diaehora" className="block text-sm font-semibold text-gray-700 mb-2">
                Data e Horário
              </label>
              <input
                type="datetime-local"
                id="diaehora"
                name="diaehora"
                required
                min={getMinDateTime()}
                value={formData.diaehora}
                onChange={(e) => handleDateTimeChange(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="especialista" className="block text-sm font-semibold text-gray-700 mb-2">
                Especialista
              </label>
              <select
                name="especialista"
                id="especialista"
                required
                value={formData.especialista}
                onChange={(e) => onUpdateFormData('especialista', e.target.value)}
                className="input-field"
              >
                <option value="">Selecione o especialista...</option>
                {ESPECIALISTAS.map((especialista) => (
                  <option key={especialista.value} value={especialista.value}>
                    {especialista.label}
                  </option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full btn-accent text-lg py-4 mt-6"
            >
              📞 Marcar Teleconsulta!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeleconsultaForm;
