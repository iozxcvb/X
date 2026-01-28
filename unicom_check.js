let body = $response.body;
// 直接在文本里查找替换，不进行 JSON 解析，保证 100% 原样保留其他内容
body = body.replace(/"respCode"\s*:\s*"\d+"/, '"respCode":"0000"');
$done({ body });
