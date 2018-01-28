import {
    addExpense,
    removeExpense,
    editExpense
} from '../../actions/expenses';
import expensesReducer from '../../reducers/expenses';

const state = [
    {
        id:"111aaa",
        description: '1111',
        note: '',
        amount: 123,
        createdAt: 0
    },
    {
        id: "222bbb",
        description: '2222',
        note: '',
        amount: 123,
        createdAt: 0
    }
]

// Default
test("should return default expense with array", () => {
    const expenses = expensesReducer(undefined, {type: "@@INIT"});
    expect(expenses).toEqual([]);
});

// add expense
test("should return default expense with array", () => {
    const expenses = expensesReducer(undefined, addExpense(
        {
            description: 'test',
            note: '',
            amount: 123,
            createdAt: 10
        }
    ));
    expect(expenses).toEqual([{
        id: expect.any(String),
        description: 'test',
        note: '',
        amount: 123,
        createdAt: 10
    }]);
});

// remove expense
test("should remove object from state array", () => {
    const returnState = expensesReducer(state, removeExpense({id: "111aaa"}))
    expect(returnState).toEqual([state[1]]);
});

// don't remove if id is not found

// edit expense

test("should edit object from state array", () => {
    const returnState = expensesReducer(state, editExpense("222bbb", {
        description: "EIDTED!",
        amount: 100
    }));
    expect(returnState).toEqual([state[0], {
        id: "222bbb",
        description: 'EIDTED!',
        note: '',
        amount: 100,
        createdAt: 0
    }]);
});

// should don't edit expense if id is not found