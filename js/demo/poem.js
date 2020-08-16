//纸上得来终觉浅，绝知此事要躬行。
if (onlyReadFrom(paper)) {
    return "little"
} else if (andToDo(myself)) {
    return "a little"
}
//终日错错碎梦间，忽闻春尽强登山。因过竹院逢僧话，偷得浮生半日闲。
function* today() {
    try {
        let item1 = yield toDo1();
        let item2 = yield toDo2(item1);
        let item3 = yield toDo3(item2);
        let result = yield toDo4(item1, item2, item3);
    } catch (error) {
        doNothing(error);
        today();
    } finally {
        if (springIsEnd) {
            climbing();
            if (goThrough(temple)) {
                enter(temple) {
                    switch (person) {
                        case "nigu":
                            doNothing();
                            break;
                        case "heshang":
                            haveAConversation();
                            break;
                    }
                }
            }

        }
    }

}

function haveAConversation() {
    stealTime();
    return "slow down and enjoy the life"
}


//明日复明日，明日何其多
if (tomorrow) {
    tomorrow += 1
}