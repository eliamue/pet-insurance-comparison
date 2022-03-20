import React from "react";
import PropTypes from "prop-types";
import { useCreateItem } from "../hooks/useCreateItem";
import { createItem } from "../services/services";
import "../styles/Form.css";
import Nav from "./Nav";

const Form = () => {
  const {
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
    handleReviews,
  } = useCreateItem();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
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
    };
    await createItem(data);
    window.location("/list");
  };

  return (
    <>
      <Nav />
      <div className="form-container">
        <h1 className="add-header">Add Pet Insurance Company</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="info-container">
            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Name of Insurance Company: </h4>
              </div>
              <input
                name="title"
                onChange={handleTitle}
                placeholder="Company Inc."
                value={title}
                required
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Unique Trait: </h4>
              </div>
              <textarea
                name="unique"
                id="unique-field"
                onChange={handleUniqueTrait}
                value={uniquetrait}
                required
                placeholder="Description of unique traits/services/coverage offered"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Link to Resource: </h4>
              </div>
              <input
                name="website"
                onChange={handleWebsite}
                value={website}
                placeholder="http://www.pet-insurance-company.com"
                required
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Logo/Image</h4>
              </div>
              <input
                name="logo"
                onChange={handleLogo}
                value={logo}
                placeholder="http://www.insurance-logo.com"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>
                  Wait period for coverage of pre-existing conditions that
                  are/were declared cured:{" "}
                </h4>
              </div>
              <input
                name="cured"
                id="cured-field"
                onChange={handleCured}
                value={cured}
                required
                placeholder="If not offered, leave blank"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Quote: </h4>
              </div>
              <input
                name="quote"
                id="quote-field"
                onChange={handleQuote}
                value={quote}
                required
                placeholder="Quote you received, i.e. $65"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Deductable: </h4>
              </div>
              <input
                name="deductable"
                id="deductable-field"
                onChange={handleDeductable}
                value={deductable}
                required
                placeholder="$200"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Reimbursement Rate Percentage After Deductable: </h4>
              </div>
              <input
                name="rerate"
                id="rerate-field"
                onChange={handleRerate}
                value={rerate}
                required
                placeholder="80%"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Annual Max Reimbursement: </h4>
              </div>
              <input
                name="remax"
                id="remax-field"
                onChange={handleRemax}
                value={remax}
                required
                placeholder="80%"
              />
            </label>
          </div>

          <div className="right-container">

          <label className="form-section">
            <h4 className="required">*</h4>
              <div className="prompt">
                <h4>Signup Fee: </h4>
              </div>
              <input
                name="fee"
                id="fee-field"
                onChange={handleFee}
                value={fee}
                required
                placeholder="If no signup fee, leave blank"
              />
            </label>

            <label className="form-section">
            <h4 className="required">*</h4>
              <div className="prompt">
                <h4>Cancellation Policy: </h4>
              </div>
              <input
                name="cancellation"
                id="cancellation-field"
                onChange={handleCancellation}
                value={cancellation}
                required
                placeholder="30-day money back guarantee"
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Reviews: </h4>
              </div>
              <input
                name="reviews"
                id="reviews-field"
                onChange={handleReviews}
                value={reviews}
                placeholder="Average reviews, such as good, bad, mixed, etc."
              />
            </label> 

            <div className="options-container">
              <label className="form-section">
                <div className="prompt">
                  <h4 className="required">*</h4>
                  <h4>Are Death/Euthanasia Costs Coverage Provided?</h4>
                </div>
                <select
                  name="death"
                  className="death"
                  onChange={handleDeath}
                  value={death}
                  required
                >
                  <option value="" defaultValue disabled>
                    Select...
                  </option>
                  <option value="true" label="True"></option>
                  <option value="false" label="False"></option>
                </select>
              </label>
            </div>

            <div className="options-container">
              <label className="form-section">
                <h4 className="required">*</h4>
                <div className="prompt">
                  <h4>Is Dental Coverage Provided?</h4>
                </div>
                <select
                  name="dental"
                  className="dental"
                  onChange={handleDental}
                  value={dental}
                  required
                >
                  <option value="" defaultValue disabled>
                    Select...
                  </option>
                  <option value="true" label="True"></option>
                  <option value="false" label="False"></option>
                </select>
              </label>
            </div>

            <div className="options-container">
              <label className="form-section">
                <h4 className="required">*</h4>
                <div className="prompt">
                  <h4>Is Prescription Food Coverage Offered?</h4>
                </div>
                <select
                  name="food"
                  className="food"
                  onChange={handleFood}
                  value={food}
                  required
                >
                  <option value="" defaultValue disabled>
                    Select...
                  </option>
                  <option value="true" label="True"></option>
                  <option value="false" label="False"></option>
                </select>
              </label>
            </div>

            <div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <div className="required">* Is Required</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  about: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  located: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default Form;
