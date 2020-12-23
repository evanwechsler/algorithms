export function bubbleSort(list) {
    var sorted = false;
    var i = 1;
    while (!sorted) {
        sorted = true;
        for (var j = 0; j <= list.length - i - 2; j++) {

            if (list[j] > list[j + 1]) {
                var temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
                sorted = false

            }
            this.setState({ randomNumber: list })
        }
        i++;
    }
}