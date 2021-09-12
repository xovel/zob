# 接口规范

> Made for the CCC.

本文档制定开发接口规范。

根据社区通用规则制定而成，主要参考规范：

1. GitHub API v3
2. Google API Improvement Proposals
3. Hapi API
4. Joi validation
5. Express API

接口分为四个部分：请求方法、请求地址、请求参数、返回参数。

## 接口编写基本规范

1. 明确接口的编写目的和使用场景。
1. 请求参数和返回参数需要表述清楚，任何可能的场景都需要进行限制。
1. 接口需要进行版本管理。
1. 提供请求示例。
1. 提供单元测试。

## URI

1. 不允许出现大写字母。
1. 多个单词拼接可以使用短杠或者斜杠连接。
1. 具备语义化。

## 请求方法

必须进行指定，且为 HTTP 规范中的请求方法（GET/POST/PUT/DELETE/HEAD/CONNECT/OPTIONS/TRACE）之一。

## 请求参数

请求参数分为四类：路径参数、请求头参数、问询参数、请求数据。

### 路径参数

即在请求 URI 中使用占位符的方式进行指定的命名方式。

路径参数的表示方法通常有两种语法：

1. `/:xxx/`
2. `/{xxx}/`

其中 `xxx` 为路径参数的字段名。

比如 `/article/:id` 中的 id 表示文章的编号。

路径参数字段要求语义化清晰，只允许使用小写字母表示。

### 请求头参数 Request Headers

符合 HTTP 基本规范。

如果需要使用自定义字段，如 token，请确保对应服务器支持使用该自定义字段。

### 问询参数 Query

符合 URLQuerySchema 的请求参数。

直观的表现为请求 URI 后面以问号 `?` 开头的以 `key=value` 形式表示的参数，多个参数之间使用 `&` 符号进行连接。

### 请求数据 Request Body

大部分情况下使用该场景对请求参数进行上送。

请求数据依赖于请求头中的 `Content-Type`：

- `application/json`，当前主流提交格式，使用 JSON 格式对数据进行提交。
- `multipart/form-data`，表单提交。
- `application/x-www-from-urlencoded`，键值对形式提交。
- `application/octet-stream`，二进制流提交。
- 其他类型，是 raw 形式的提交，比如 `text/plain`。

### 请求参数规范

列出每一种需要的参数类型，明确对应字段的数据上送要求，做到明确以下几种限制：

- 字段名称
- 参数类型（String/Boolen/Number/Array/Object）
- 字段长度
- 参数是否必传
- 示例值
- 备注

## 返回参数

返回参数包含首部字段和响应参数。

### 首部字段 Response Headers

符合 HTTP 基本规范。

- 可以使用 `Set-Cookie` 设置 HttpOnly 的 Cookie。
- 可以设定特定的响应头 `Content-Disposition` 表示一个文件下载。

### 响应参数 Response Data

跟请求参数类似，需要给出对应字段的详细描述：

- 字段名称
- 参数类型（String/Boolen/Number/Array/Object）
- 字段长度
- 参数是否必定返回
- 示例值
- 备注

## 其他说明

请求参数和返回参数中，可以约定默认值：

- 如果是请求参数，必传字段中可以约定默认参数，及参数如果为空时，默认使用指定值。
- 如果是返回参数，必定返回字段如果缺失，可以使用指定值作为兜底。

通常情况下，GET/DELETE 请求不携带 body 参数。POST/PUT 请求不携带 query 参数。

如果接口遵循 Restful 规范，则使用对应的 HTTP 状态码来表示请求的响应情况。

如果接口使用 JSON RPC，则 body 响应参数使用一个 JSON 对象来表示返回的数据，这个 JSON 对象的数据格式约定如下：

```json
{
  "code": 200,
  "data": ...,
  "msg": "ok"
}
```

## 异常处理

HTTP 异常状态码适用。

业务返回参数中的 code 值对应的异常场景需要做出全面的说明。
