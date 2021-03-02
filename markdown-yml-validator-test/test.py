# Import Yamale and make a schema object:
# import yamale
# schema = yamale.make_schema('./schema.yaml')

# Create a Data object
# data = yamale.make_data('./test_files/community-support-for-automations.md')

# Validate data against the schema. Throws a ValueError if data is invalid.
# yamale.validate(schema, data)



from ruamel import yaml

with open('test_files/community-support-for-automations.md','r') as file:
    data = yaml.safe_load(file)

    print(data)