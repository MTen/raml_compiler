require_relative 'raml_ruby/lib/raml'
require 'pry'

root = "/Users/mtener/Dropbox/fuzz/code/tapwiser-api-specification/"
region = "Master/"
schema = "api.raml"
target_file = root + region + schema
raml_yaml = root + region + "compiledRaml.yaml"

unless File.exists?(raml_yaml)
  File.new(raml_yaml)
end

parsed_raml = Raml.parse_file(target_file)
raml_to_yaml = parsed_raml.psych_to_yaml

f = File.open(raml_yaml, "w+")
f.write(raml_to_yaml)
