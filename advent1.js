function init1() {
    var ac = document.getElementById("adventContent");
    var content = '<h2>--- Day 1: Report Repair ---</h2>';
    content += '<button type="button" onclick="insertMyInput()">My Input</button><br>';
    content += '<textarea id="input1"></textarea><br>';
    content += '<button type="button" onclick="day1part1()">Part 1</button>';
    content += '<button type="button" onclick="day1part2()">Part 2</button>';
    content += '<div id="output1"></div>';
    ac.innerHTML = content;
}

function day1part1() {
    var input = document.getElementById("input1").value;
    var lines = input.split('\n');
    var done = false;
    var nums = lines.map(function(line) {
        return parseInt(line);
    });

    for (var i = 0; i < nums.length && !done; i++) {
        for (var j = i + 1; j < nums.length && !done; j++) {
            if (nums[i] + nums[j] == 2020) {
                document.getElementById("output1").innerHTML = nums[i] * nums[j];
                done = true;
            }
        }
    }
}

function day1part2() {
    var input = document.getElementById("input1").value;
    var lines = input.split('\n');
    var done = false;
    var nums = lines.map(function(line) {
        return parseInt(line);
    });

    for (var i = 0; i < nums.length && !done; i++) {
        for (var j = i + 1; j < nums.length && !done; j++) {
            for (var k = j + 1; k < nums.length && !done; k++) {
                if (nums[i] + nums[j] + nums[k] == 2020) {
                    document.getElementById("output1").innerHTML = nums[i] * nums[j] * nums[k];
                    done = true;
                }
            }
        }
    }
}

function insertMyInput() {
    // document.getElementById("input1").value = "butt";
    document.getElementById("input1").value = "1834\n1546\n1119\n1870\n1193\n1198\n1542\n1944\n1817\n1249\n1361\n1856\n1258\n1425\n1835\n1520\n1792\n1130\n2004\n1366\n1549\n1347\n1507\n1699\n1491\n1557\n1865\n1948\n1199\n1229\n1598\n1756\n1643\n1306\n1838\n1157\n1745\n1603\n1972\n1123\n1963\n1759\n1118\n1526\n1695\n1661\n1262\n1117\n1844\n1922\n1997\n1630\n1337\n1721\n1147\n1848\n1476\n1975\n1942\n1569\n1126\n1313\n1449\n1206\n1722\n1534\n1706\n1596\n1700\n1811\n906\n1666\n1945\n1271\n1629\n1456\n1316\n1636\n1884\n1556\n1317\n1393\n1953\n1658\n2005\n1252\n1878\n1691\n60\n1872\n386\n1369\n1739\n1460\n1267\n1935\n1992\n1310\n1818\n1320\n1437\n1486\n1205\n1286\n1670\n1577\n1237\n1558\n1937\n1938\n1656\n1220\n1732\n1647\n1857\n1446\n1516\n1450\n1860\n1625\n1377\n1312\n1588\n1895\n1967\n1567\n1582\n1428\n1415\n1731\n1919\n1651\n1597\n1982\n1576\n1172\n1568\n1867\n1660\n1754\n1227\n1121\n1733\n537\n1809\n1322\n1876\n1665\n1124\n1461\n1888\n1368\n1235\n1479\n1529\n1148\n1996\n1939\n1340\n1531\n1438\n1897\n1152\n1321\n1770\n897\n1750\n1111\n1772\n1615\n1798\n1359\n1470\n1610\n1362\n1973\n1892\n1830\n599\n1341\n1681\n1572\n1873\n42\n1246\n1447\n1800\n1524\n1214\n1784\n1664\n1882\n1989\n1797\n1211\n1170\n1854\n1287\n1641\n1760";
}