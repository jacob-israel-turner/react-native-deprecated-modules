/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const DeprecatedImageStylePropTypes = require('./DeprecatedImageStylePropTypes');
const DeprecatedStyleSheetPropType = require('./DeprecatedStyleSheetPropType');
const DeprecatedViewPropTypes = require('./DeprecatedViewPropTypes');
const PropTypes = require('prop-types');

/**
 * @see facebook/react-native/Libraries/Image/ImageProps.js
 */
const DeprecatedImagePropType = {
  ...DeprecatedViewPropTypes,
  style: DeprecatedStyleSheetPropType(DeprecatedImageStylePropTypes),
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
    ),
  ]),
  blurRadius: PropTypes.number,
  defaultSource: PropTypes.number,
  loadingIndicatorSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    PropTypes.number,
  ]),
  progressiveRenderingEnabled: PropTypes.bool,
  fadeDuration: PropTypes.number,
  internal_analyticTag: PropTypes.string,
  onLoadStart: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
  testID: PropTypes.string,
  resizeMethod: PropTypes.oneOf(['auto', 'resize', 'scale']),
  resizeMode: PropTypes.oneOf([
    'cover',
    'contain',
    'stretch',
    'repeat',
    'center',
  ]),
};

module.exports = DeprecatedImagePropType;
