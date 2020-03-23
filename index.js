// Your code here
function mapToNegativize(sourceArray) {
    const output = [];
    for (const element of sourceArray) {
        output.push(element * -1);
    }
    return output
}

function mapToNoChange(sourceArray) {
    const output = [];
    for (const element of sourceArray) {
        output.push(element);
    }
    return output
}

function mapToDouble(sourceArray) {
    const output = [];
    for (const element of sourceArray) {
        output.push(element * 2);
    }
    return output
}

function mapToSquare(sourceArray) {
    const output = [];
    for (const element of sourceArray) {
        output.push(element ** 2);
    }
    return output
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let output = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        output += sourceArray[i];
    }
    return output
}

function reduceToAllTrue(sourceArray) {
    let output = true;
    for (const element of sourceArray) {
        if (element) {
            continue
        } else {
            output = false;
            break
        }
    }
    return output
}
function reduceToAnyTrue(sourceArray) {
    let output = false;
    for (const element of sourceArray) {
        if (element) {
            output = true
        }
    }
    return output
}