Param($config, $key, $value)
Write-Host $config
Write-Host $key
Write-Host $value
$doc = New-Object System.Xml.XmlDocument
$doc.Load($config)
Write-Host $doc
$node = $doc.SelectSingleNode('configuration/connectionStrings/add[@name="' + $key + '"]')
$node.Attributes['connectionString'].Value = $value
Write-Host $node
$doc.Save($config)