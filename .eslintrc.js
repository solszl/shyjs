module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "standard",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "keyword-spacing": ["error", {
      "overrides": {
        "if": {
          "after": false
        },
        "for": {
          "after": false
        },
        "while": {
          "after": false
        }
      }
    }],
    "semi": 2,
    // 空的构造函数
    "no-useless-constructor": 0,
    // 是否允许使用控制台输出
    "no-console": 0,
    //未使用变量
    "no-unused-vars": 1,
    // 变量前加修饰符  var let const 等
    "no-undef": 1,
    //避免重复类成员
    "no-dupe-class-members": 2,
    // 禁止重复导入
    "no-duplicate-imports": 2,
    // 禁止链式定义 let a = b = c = 1
    "no-multi-assign": 1,
    // 禁止使用 自增、自减
    "no-plusplus": 1,
    // 判断是否相等用 === 或 !==
    "eqeqeq": 1,
    // 三目运算符 单行
    "no-nested-ternary": 1,
    // 所有注释开头空一个
    "spaced-comment": 1,
    // 用空格来隔开运算符
    "space-infix-ops": 1,
    // 花括号里加空格
    "object-curly-spacing": 1,
    // , 前不要空格， , 后需要空格
    "comma-spacing": 1,
    // "sort-imports": 1,
    // 禁止 function 标识符和括号之间出现空格
    "no-spaced-func": 1,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": 0,
    // 只读类原型不可添加属性
    "no-extend-native": 0,
    // 类名首字母大写
    "new-cap": 1
  }
};