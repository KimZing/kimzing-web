import KimInput from './kim-input'
import KimInputNumber from './kim-input-number'
import KimSelect from './kim-select'
import KimDatePicker from './kim-date-picker'
import KimSwitch from './kim-switch'
import KimCheckbox from './kim-checkbox'
import KimRadio from './kim-radio'

export const getComponent = (type) => {
    if (type === 'Input') {
        return KimInput
    }
    if (type === 'InputNumber') {
        return KimInputNumber
    }
    if (type === 'Select') {
        return KimSelect
    }
    if (type === 'DatePicker') {
        return KimDatePicker
    }
    if (type === 'Switch') {
        return KimSwitch
    }
    if (type === 'Checkbox') {
        return KimCheckbox
    }
    if (type === 'Radio') {
        return KimRadio
    }
    return null
}
