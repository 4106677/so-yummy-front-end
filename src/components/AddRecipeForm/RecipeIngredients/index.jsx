import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';

// components
import { BlockTitle } from '../SharedFormFields/BlockTitle';
import { Counter } from './Counter';

import * as Styled from './RecipeIngredients.styled';
import { IngredientField } from './IngredientField';

export function RecipeIngredients({ name }) {
  const [fields, , { setValue }] = useField(name);
  const actualQuatity = fields.value.length;

  // handlers
  function onQuanityChange(updatedQuantity) {
    if (updatedQuantity > actualQuatity) {
      setValue([
        ...fields.value,
        { id: uuidv4(), ingredient: '', amount: '', measurementUnit: '' }
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

  // conditions
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

            function handleValueChange(key, id, value) {
              const updatedFields = fields.value.map((fld) => {
                if (fld.id === id) {
                  return { ...fld, [key]: value };
                }
                return { ...fld };
              });

              setValue(updatedFields);
            }

            return (
              <IngredientField
                key={field.id}
                name={name}
                onDelete={onDelete.bind(null, field.id)}
                gap={idx === actualQuatity - 1 ? '0' : '1.5rem'}
                optionList={['g', 'kg', 'tbs']}
                inputHandlers={{
                  inputValue: ingredient,
                  onInputChange: handleValueChange.bind(null, 'ingredient', field.id)
                }}
                selectHandlers={{
                  inputValue: amount,
                  selectValue: measurementUnit,
                  onInputChange: handleValueChange.bind(null, 'amount', field.id),
                  onSelectChange: handleValueChange.bind(null, 'measurementUnit', field.id)
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
  name: PropTypes.string.isRequired
};
