import { useState } from "react";

export const useCreateItem = () => {
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [cured, setCured] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [dental, setDental] = useState('');
  const [food, setFood] = useState('');
  const [uniquetrait, setUniqueTrait] = useState('');
  const [death, setDeath] = useState('');
  const [deductable, setDeductable] = useState('');
  const [rerate, setRerate] = useState('');
  const [remax, setRemax] = useState('');
  const [reviews, setReviews] = useState('');
  const [cancellation, setCancellation] = useState('');
  const [fee, setFee] = useState('');

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleQuote = ({ target }) => {
    setQuote(target.value);
  };

  const handleCured = ({ target }) => {
    setCured(target.value);
  };

  const handleWebsite = ({ target }) => {
    setWebsite(target.value);
  };

  const handleLogo = ({ target }) => {
    setLogo(target.value);
  };

  const handleDental = ({ target }) => {
    setDental(target.value);
  };

  const handleFood = ({ target }) => {
    setFood(target.value);
  };

  const handleUniqueTrait = ({ target }) => {
    setUniqueTrait(target.value);
  };

  const handleDeath = ({ target }) => {
    setDeath(target.value);
  };

  const handleFee = ({ target }) => {
    setFee(target.value);
  };

  const handleCancellation = ({ target }) => {
    setCancellation(target.value);
  };

  const handleRerate = ({ target }) => {
    setRerate(target.value);
  };

  const handleRemax = ({ target }) => {
    setRemax(target.value);
  };

  const handleReviews = ({ target }) => {
    setReviews(target.value);
  };

  const handleDeductable = ({ target }) => {
    setDeductable(target.value);
  };

  return {
    title,
    quote,
    uniquetrait,
    website,
    logo,
    death,
    cured,
    fee,
    deductable,
    reviews,
    cancellation,
    remax,
    rerate,
    dental,
    food,
    handleTitle,
    handleQuote,
    handleCured,
    handleWebsite,
    handleLogo,
    handleDental,
    handleFood,
    handleUniqueTrait,
    handleDeath,
    handleDeductable,
    handleRemax,
    handleRerate,
    handleFee,
    handleCancellation,
    handleReviews
  };
};
