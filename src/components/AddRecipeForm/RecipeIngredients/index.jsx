import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';

import { BlockTitle } from '../SharedFormFields/BlockTitle';
import { Counter } from './Counter';

import * as Styled from './RecipeIngredients.styled';
import { IngredientField } from './IngredientField';

export function RecipeIngredients({
  name,
  selectOptionList = [],
  inputOptionList = [],
  isSubmit,
  onDatalistError
}) {
  const [fields, { error }, { setValue }] = useField(name);
  const actualQuatity = fields.value.length;

  function onQuanityChange(updatedQuantity) {
    if (updatedQuantity > actualQuatity) {
      setValue([
        {
          id: uuidv4(),
          amount: '',
          ingredient: '',
          measurementUnit: selectOptionList[0]
        },
        ...fields.value
      ]);
    } else {
      const filedValuesArray = [...fields.value];
      filedValuesArray.pop();
      setValue(filedValuesArray);
    }
  }

  function onDelete(id) {
    setValue(fields.value.filter((i) => i.id !== id));
  }

  const hasFields = !!fields.value.length;

  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper>
        <BlockTitle title="Ingredients" />
        <Counter onQuanityChange={onQuanityChange} value={actualQuatity} />
      </Styled.HeaderWrapper>
      <Styled.BodyWrapper>
        {hasFields &&
          fields.value.map((field, idx) => {
            const { ingredient, amount, measurementUnit } = field;
            const zIndex = actualQuatity * 3;

            function handleValueChange(key, id, value, err, ingredientId) {
              const updatedFields = fields.value.map((fld) => {
                const isIngredientField = key === 'ingredient';

                if (fld.id === id) {
                  const newField = { ...fld, [key]: value };
                  if (isIngredientField) {
                    if (ingredientId) {
                      newField.id = ingredientId;
                    }
                    onDatalistError(err);
                  }
                  return newField;
                }

                return { ...fld };
              });
              setValue(updatedFields);
            }

            return (
              <IngredientField
                key={field.id + idx}
                onDelete={onDelete.bind(null, field.id)}
                gap={idx === actualQuatity - 1 ? '0' : '1.5rem'}
                zIndex={zIndex - idx}
                selectOptionList={selectOptionList}
                inputOptionList={inputOptionList}
                error={error && error[idx]}
                isSubmit={isSubmit}
                inputHandlers={{
                  inputValue: ingredient,
                  onInputChange: (value, err, id) =>
                    handleValueChange('ingredient', field.id, value, err, id)
                }}
                selectHandlers={{
                  inputValue: amount,
                  selectValue: measurementUnit,
                  onInputChange: (value, err, id) =>
                    handleValueChange('amount', field.id, value, err, id),
                  onSelectChange: (value, err, id) =>
                    handleValueChange('measurementUnit', field.id, value, err, id)
                }}
              />
            );
          })}
      </Styled.BodyWrapper>
      <Styled.BodyWrapper></Styled.BodyWrapper>
    </Styled.Wrapper>
  );
}

RecipeIngredients.propTypes = {
  name: PropTypes.string.isRequired,
  selectOptionList: PropTypes.array,
  inputOptionList: PropTypes.array
};
