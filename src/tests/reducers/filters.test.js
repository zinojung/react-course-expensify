import moment from 'moment';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../../actions/filters';
import filtersReducer from '../../reducers/filters';

const state = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test("should set text return object", () => {
    const result = filtersReducer(state, setTextFilter("test"));
    expect(result).toEqual({
        ...state,
        text: "test",
    });
});

test("should set sortBy to 'date'", () => {
    const result = filtersReducer(state, sortByDate());
    expect(result).toEqual({
        ...state,
        sortBy: "date"
    });
});

test("should set sortBy to 'amount'", () => {
    const result = filtersReducer(state, sortByAmount());
    expect(result.sortBy).toBe("amount");
});

test("should set Start Date", () => {
    const date = moment(100).valueOf();
    const result = filtersReducer(state, setStartDate(moment(100).valueOf()));
    expect(result).toEqual({
        ...state,
        startDate: date
    });
});

test("should set End Date", () => {
    const date = moment(100).valueOf();
    const result = filtersReducer(state, setEndDate(moment(100).valueOf()));
    expect(result).toEqual({
        ...state,
        endDate: date
    });
});

test("should return default state", () => {
    const result = filtersReducer(undefined, {type: "@@INIT"});
    expect(result).toEqual(state);
})