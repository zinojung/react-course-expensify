import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate} from '../../actions/filters';

//setTextFilter test
test("should setup setTextFilter action object", () => {
    const action = setTextFilter("text");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "text"
    })
});

test("should setup setTextFilter action object with default value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
});


//sortByDate test
test("should setup sortByDate action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

//sortByAmount test
test("should setup sortByAmount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});
//setStartDate test
test("should setup setStartDate action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});
//setEndDate test
test("should setup setEndDate action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});