var React = require('react');
var {
  View,
  DatePickerIOS,
  PixelRatio
} = require('react-native')

var WidgetMixin = require('../mixins/WidgetMixin.js');


module.exports = React.createClass({
  mixins: [WidgetMixin],

  getDefaultProps() {
    return {
      type: 'DatePickerIOSWidget',
      getDefaultDate: () => { return new Date(); }
    };
  },

  getInitialState() {
    return {
      value: new Date(),
    };
  },

  componentDidMount() {
    this._onChange(this.props.getDefaultDate());
  },

  render() {
    return (
      <View style={[this.props.style, this.getStyle('row')]}>
        <DatePickerIOS
          style={this.getStyle('picker')}

          {...this.props}

          onDateChange={this._onChange}
          date={this.state.value}
        />
      </View>
    );
  },

  defaultStyles: {
    row: {
      backgroundColor: '#FFF',
      borderBottomWidth: 1 / PixelRatio.get(),
      borderColor: '#c8c7cc',
    },
    picker: {
    },
  },

});
