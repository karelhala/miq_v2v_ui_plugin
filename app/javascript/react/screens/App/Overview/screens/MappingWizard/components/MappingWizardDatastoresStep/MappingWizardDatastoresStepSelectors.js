export const sourceDatastoreFilter = (
  datastoresToFilter,
  datastoreStepMappings
) => {
  const mappedDatastores = datastoreStepMappings.reduce(
    (mappedDatastoresArray, targetClusterDatastoreMappings) => {
      const sourceDatastores = targetClusterDatastoreMappings.nodes.reduce(
        (datastores, datastoreMapping) => {
          return datastores.concat(datastoreMapping.nodes);
        },
        []
      );
      return mappedDatastoresArray.concat(sourceDatastores);
    },
    []
  );

  return datastoresToFilter.filter(datastore => {
    return !mappedDatastores.some(mappedDatastore => {
      return mappedDatastore.id === datastore.id;
    });
  });
};

export const targetDatastoreFilter = (
  datastoresToFilter,
  datastoreStepMappings
) => {
  const mappedDatastores = datastoreStepMappings.reduce(
    (mappedDatastoresArray, targetClusterDatastoreMappings) => {
      return mappedDatastoresArray.concat(targetClusterDatastoreMappings.nodes);
    },
    []
  );
  return datastoresToFilter.filter(datastore => {
    return !mappedDatastores.some(mappedDatastore => {
      return mappedDatastore.id === datastore.id;
    });
  });
};
