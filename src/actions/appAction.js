export const isUserOpenAction = (data) => {
    return {
        type: 'IS_USER_OPEN',
        data
    }
}

export const changePageNameAction = (data) => {
    console.log(data);
    return {
        type: 'CHANGE_PAGE_NAME',
        data
    }
}

