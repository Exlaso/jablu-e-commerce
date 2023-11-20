/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  float8: { input: any; output: any; }
  json: { input: any; output: any; }
  numeric: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "addresses" */
export type Addresses = {
  active: Scalars['Boolean']['output'];
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  address_id: Scalars['String']['output'];
  city: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  lastname: Scalars['String']['output'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  phoneno: Scalars['String']['output'];
  pincode: Scalars['String']['output'];
  region: Scalars['String']['output'];
  regionstate: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userid: Scalars['String']['output'];
};


/** columns and relationships of "addresses" */
export type AddressesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "addresses" */
export type AddressesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "addresses" */
export type Addresses_Aggregate = {
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

export type Addresses_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Addresses_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Addresses_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Addresses_Aggregate_Bool_Exp_Count>;
};

export type Addresses_Aggregate_Bool_Exp_Bool_And = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Addresses_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Addresses_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "addresses" */
export type Addresses_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
};


/** aggregate fields of "addresses" */
export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "addresses" */
export type Addresses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Addresses_Max_Order_By>;
  min?: InputMaybe<Addresses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "addresses" */
export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "addresses". All fields are combined with a logical 'AND'. */
export type Addresses_Bool_Exp = {
  _and?: InputMaybe<Array<Addresses_Bool_Exp>>;
  _not?: InputMaybe<Addresses_Bool_Exp>;
  _or?: InputMaybe<Array<Addresses_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  address1?: InputMaybe<String_Comparison_Exp>;
  address2?: InputMaybe<String_Comparison_Exp>;
  address_id?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  phoneno?: InputMaybe<String_Comparison_Exp>;
  pincode?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  regionstate?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "addresses" */
export type Addresses_Constraint =
  /** unique or primary key constraint on columns "address_id" */
  | 'addresses_pkey';

/** input type for inserting data into table "addresses" */
export type Addresses_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  address_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  phoneno?: InputMaybe<Scalars['String']['input']>;
  pincode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  regionstate?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Addresses_Max_Fields = {
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  address_id?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  phoneno?: Maybe<Scalars['String']['output']>;
  pincode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  regionstate?: Maybe<Scalars['String']['output']>;
  userid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "addresses" */
export type Addresses_Max_Order_By = {
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  address_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  phoneno?: InputMaybe<Order_By>;
  pincode?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  regionstate?: InputMaybe<Order_By>;
  userid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Addresses_Min_Fields = {
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  address_id?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  phoneno?: Maybe<Scalars['String']['output']>;
  pincode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  regionstate?: Maybe<Scalars['String']['output']>;
  userid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "addresses" */
export type Addresses_Min_Order_By = {
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  address_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  phoneno?: InputMaybe<Order_By>;
  pincode?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  regionstate?: InputMaybe<Order_By>;
  userid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "addresses" */
export type Addresses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Addresses>;
};

/** input type for inserting object relation for remote table "addresses" */
export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};

/** on_conflict condition type for table "addresses" */
export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns?: Array<Addresses_Update_Column>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "addresses". */
export type Addresses_Order_By = {
  active?: InputMaybe<Order_By>;
  address1?: InputMaybe<Order_By>;
  address2?: InputMaybe<Order_By>;
  address_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  phoneno?: InputMaybe<Order_By>;
  pincode?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  regionstate?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: addresses */
export type Addresses_Pk_Columns_Input = {
  address_id: Scalars['String']['input'];
};

/** select columns of table "addresses" */
export type Addresses_Select_Column =
  /** column name */
  | 'active'
  /** column name */
  | 'address1'
  /** column name */
  | 'address2'
  /** column name */
  | 'address_id'
  /** column name */
  | 'city'
  /** column name */
  | 'firstname'
  /** column name */
  | 'lastname'
  /** column name */
  | 'phoneno'
  /** column name */
  | 'pincode'
  /** column name */
  | 'region'
  /** column name */
  | 'regionstate'
  /** column name */
  | 'userid';

/** select "addresses_aggregate_bool_exp_bool_and_arguments_columns" columns of table "addresses" */
export type Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'active';

/** select "addresses_aggregate_bool_exp_bool_or_arguments_columns" columns of table "addresses" */
export type Addresses_Select_Column_Addresses_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'active';

/** input type for updating data in table "addresses" */
export type Addresses_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  address_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  phoneno?: InputMaybe<Scalars['String']['input']>;
  pincode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  regionstate?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "addresses" */
export type Addresses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Addresses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Addresses_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  address_id?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  phoneno?: InputMaybe<Scalars['String']['input']>;
  pincode?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  regionstate?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "addresses" */
export type Addresses_Update_Column =
  /** column name */
  | 'active'
  /** column name */
  | 'address1'
  /** column name */
  | 'address2'
  /** column name */
  | 'address_id'
  /** column name */
  | 'city'
  /** column name */
  | 'firstname'
  /** column name */
  | 'lastname'
  /** column name */
  | 'phoneno'
  /** column name */
  | 'pincode'
  /** column name */
  | 'region'
  /** column name */
  | 'regionstate'
  /** column name */
  | 'userid';

export type Addresses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Addresses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Addresses_Bool_Exp;
};

/** columns and relationships of "cart" */
export type Cart = {
  color: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
  size: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
  aggregate?: Maybe<Cart_Aggregate_Fields>;
  nodes: Array<Cart>;
};

export type Cart_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cart_Aggregate_Bool_Exp_Count>;
};

export type Cart_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cart_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cart_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
  avg?: Maybe<Cart_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cart_Max_Fields>;
  min?: Maybe<Cart_Min_Fields>;
  stddev?: Maybe<Cart_Stddev_Fields>;
  stddev_pop?: Maybe<Cart_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cart_Stddev_Samp_Fields>;
  sum?: Maybe<Cart_Sum_Fields>;
  var_pop?: Maybe<Cart_Var_Pop_Fields>;
  var_samp?: Maybe<Cart_Var_Samp_Fields>;
  variance?: Maybe<Cart_Variance_Fields>;
};


/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cart_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cart" */
export type Cart_Aggregate_Order_By = {
  avg?: InputMaybe<Cart_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cart_Max_Order_By>;
  min?: InputMaybe<Cart_Min_Order_By>;
  stddev?: InputMaybe<Cart_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cart_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cart_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cart_Sum_Order_By>;
  var_pop?: InputMaybe<Cart_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cart_Var_Samp_Order_By>;
  variance?: InputMaybe<Cart_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cart" */
export type Cart_Arr_Rel_Insert_Input = {
  data: Array<Cart_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cart_On_Conflict>;
};

/** aggregate avg on columns */
export type Cart_Avg_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "cart" */
export type Cart_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
  _and?: InputMaybe<Array<Cart_Bool_Exp>>;
  _not?: InputMaybe<Cart_Bool_Exp>;
  _or?: InputMaybe<Array<Cart_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  count?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart" */
export type Cart_Constraint =
  /** unique or primary key constraint on columns "product_id", "user_id", "color", "size" */
  | 'cart_pkey';

/** input type for incrementing numeric columns in table "cart" */
export type Cart_Inc_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Cart_Max_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "cart" */
export type Cart_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cart_Min_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "cart" */
export type Cart_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cart>;
};

/** on_conflict condition type for table "cart" */
export type Cart_On_Conflict = {
  constraint: Cart_Constraint;
  update_columns?: Array<Cart_Update_Column>;
  where?: InputMaybe<Cart_Bool_Exp>;
};

/** Ordering options when selecting data from "cart". */
export type Cart_Order_By = {
  color?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cart */
export type Cart_Pk_Columns_Input = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "cart" */
export type Cart_Select_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'count'
  /** column name */
  | 'product_id'
  /** column name */
  | 'size'
  /** column name */
  | 'user_id';

/** input type for updating data in table "cart" */
export type Cart_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Cart_Stddev_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "cart" */
export type Cart_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cart_Stddev_Pop_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "cart" */
export type Cart_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cart_Stddev_Samp_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "cart" */
export type Cart_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "cart" */
export type Cart_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cart_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cart_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Cart_Sum_Fields = {
  count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "cart" */
export type Cart_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** update columns of table "cart" */
export type Cart_Update_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'count'
  /** column name */
  | 'product_id'
  /** column name */
  | 'size'
  /** column name */
  | 'user_id';

export type Cart_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cart_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cart_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cart_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cart_Var_Pop_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "cart" */
export type Cart_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cart_Var_Samp_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "cart" */
export type Cart_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cart_Variance_Fields = {
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "cart" */
export type Cart_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** columns and relationships of "categories" */
export type Categories = {
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type Categories_Constraint =
  /** unique or primary key constraint on columns "name" */
  | 'categories_pkey';

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  description?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  name: Scalars['String']['input'];
};

/** select columns of table "categories" */
export type Categories_Select_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'image'
  /** column name */
  | 'name';

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "categories" */
export type Categories_Update_Column =
  /** column name */
  | 'description'
  /** column name */
  | 'image'
  /** column name */
  | 'name';

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "addresses" */
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  /** delete single row from the table: "addresses" */
  delete_addresses_by_pk?: Maybe<Addresses>;
  /** delete data from the table: "cart" */
  delete_cart?: Maybe<Cart_Mutation_Response>;
  /** delete single row from the table: "cart" */
  delete_cart_by_pk?: Maybe<Cart>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "order_products" */
  delete_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** delete single row from the table: "order_products" */
  delete_order_products_by_pk?: Maybe<Order_Products>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "product_color" */
  delete_product_color?: Maybe<Product_Color_Mutation_Response>;
  /** delete single row from the table: "product_color" */
  delete_product_color_by_pk?: Maybe<Product_Color>;
  /** delete data from the table: "product_image_urls" */
  delete_product_image_urls?: Maybe<Product_Image_Urls_Mutation_Response>;
  /** delete single row from the table: "product_image_urls" */
  delete_product_image_urls_by_pk?: Maybe<Product_Image_Urls>;
  /** delete data from the table: "product_ratings" */
  delete_product_ratings?: Maybe<Product_Ratings_Mutation_Response>;
  /** delete single row from the table: "product_ratings" */
  delete_product_ratings_by_pk?: Maybe<Product_Ratings>;
  /** delete data from the table: "product_sizes" */
  delete_product_sizes?: Maybe<Product_Sizes_Mutation_Response>;
  /** delete single row from the table: "product_sizes" */
  delete_product_sizes_by_pk?: Maybe<Product_Sizes>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "subscribers" */
  delete_subscribers?: Maybe<Subscribers_Mutation_Response>;
  /** delete single row from the table: "subscribers" */
  delete_subscribers_by_pk?: Maybe<Subscribers>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verificationurls" */
  delete_verificationurls?: Maybe<Verificationurls_Mutation_Response>;
  /** delete single row from the table: "verificationurls" */
  delete_verificationurls_by_pk?: Maybe<Verificationurls>;
  /** delete data from the table: "wishlist_items" */
  delete_wishlist_items?: Maybe<Wishlist_Items_Mutation_Response>;
  /** delete single row from the table: "wishlist_items" */
  delete_wishlist_items_by_pk?: Maybe<Wishlist_Items>;
  /** insert data into the table: "addresses" */
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  /** insert a single row into the table: "addresses" */
  insert_addresses_one?: Maybe<Addresses>;
  /** insert data into the table: "cart" */
  insert_cart?: Maybe<Cart_Mutation_Response>;
  /** insert a single row into the table: "cart" */
  insert_cart_one?: Maybe<Cart>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "product_color" */
  insert_product_color?: Maybe<Product_Color_Mutation_Response>;
  /** insert a single row into the table: "product_color" */
  insert_product_color_one?: Maybe<Product_Color>;
  /** insert data into the table: "product_image_urls" */
  insert_product_image_urls?: Maybe<Product_Image_Urls_Mutation_Response>;
  /** insert a single row into the table: "product_image_urls" */
  insert_product_image_urls_one?: Maybe<Product_Image_Urls>;
  /** insert data into the table: "product_ratings" */
  insert_product_ratings?: Maybe<Product_Ratings_Mutation_Response>;
  /** insert a single row into the table: "product_ratings" */
  insert_product_ratings_one?: Maybe<Product_Ratings>;
  /** insert data into the table: "product_sizes" */
  insert_product_sizes?: Maybe<Product_Sizes_Mutation_Response>;
  /** insert a single row into the table: "product_sizes" */
  insert_product_sizes_one?: Maybe<Product_Sizes>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "subscribers" */
  insert_subscribers?: Maybe<Subscribers_Mutation_Response>;
  /** insert a single row into the table: "subscribers" */
  insert_subscribers_one?: Maybe<Subscribers>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verificationurls" */
  insert_verificationurls?: Maybe<Verificationurls_Mutation_Response>;
  /** insert a single row into the table: "verificationurls" */
  insert_verificationurls_one?: Maybe<Verificationurls>;
  /** insert data into the table: "wishlist_items" */
  insert_wishlist_items?: Maybe<Wishlist_Items_Mutation_Response>;
  /** insert a single row into the table: "wishlist_items" */
  insert_wishlist_items_one?: Maybe<Wishlist_Items>;
  /** update data of the table: "addresses" */
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  /** update single row of the table: "addresses" */
  update_addresses_by_pk?: Maybe<Addresses>;
  /** update multiples rows of table: "addresses" */
  update_addresses_many?: Maybe<Array<Maybe<Addresses_Mutation_Response>>>;
  /** update data of the table: "cart" */
  update_cart?: Maybe<Cart_Mutation_Response>;
  /** update single row of the table: "cart" */
  update_cart_by_pk?: Maybe<Cart>;
  /** update multiples rows of table: "cart" */
  update_cart_many?: Maybe<Array<Maybe<Cart_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update multiples rows of table: "order_products" */
  update_order_products_many?: Maybe<Array<Maybe<Order_Products_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "product_color" */
  update_product_color?: Maybe<Product_Color_Mutation_Response>;
  /** update single row of the table: "product_color" */
  update_product_color_by_pk?: Maybe<Product_Color>;
  /** update multiples rows of table: "product_color" */
  update_product_color_many?: Maybe<Array<Maybe<Product_Color_Mutation_Response>>>;
  /** update data of the table: "product_image_urls" */
  update_product_image_urls?: Maybe<Product_Image_Urls_Mutation_Response>;
  /** update single row of the table: "product_image_urls" */
  update_product_image_urls_by_pk?: Maybe<Product_Image_Urls>;
  /** update multiples rows of table: "product_image_urls" */
  update_product_image_urls_many?: Maybe<Array<Maybe<Product_Image_Urls_Mutation_Response>>>;
  /** update data of the table: "product_ratings" */
  update_product_ratings?: Maybe<Product_Ratings_Mutation_Response>;
  /** update single row of the table: "product_ratings" */
  update_product_ratings_by_pk?: Maybe<Product_Ratings>;
  /** update multiples rows of table: "product_ratings" */
  update_product_ratings_many?: Maybe<Array<Maybe<Product_Ratings_Mutation_Response>>>;
  /** update data of the table: "product_sizes" */
  update_product_sizes?: Maybe<Product_Sizes_Mutation_Response>;
  /** update single row of the table: "product_sizes" */
  update_product_sizes_by_pk?: Maybe<Product_Sizes>;
  /** update multiples rows of table: "product_sizes" */
  update_product_sizes_many?: Maybe<Array<Maybe<Product_Sizes_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "subscribers" */
  update_subscribers?: Maybe<Subscribers_Mutation_Response>;
  /** update single row of the table: "subscribers" */
  update_subscribers_by_pk?: Maybe<Subscribers>;
  /** update multiples rows of table: "subscribers" */
  update_subscribers_many?: Maybe<Array<Maybe<Subscribers_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verificationurls" */
  update_verificationurls?: Maybe<Verificationurls_Mutation_Response>;
  /** update single row of the table: "verificationurls" */
  update_verificationurls_by_pk?: Maybe<Verificationurls>;
  /** update multiples rows of table: "verificationurls" */
  update_verificationurls_many?: Maybe<Array<Maybe<Verificationurls_Mutation_Response>>>;
  /** update data of the table: "wishlist_items" */
  update_wishlist_items?: Maybe<Wishlist_Items_Mutation_Response>;
  /** update single row of the table: "wishlist_items" */
  update_wishlist_items_by_pk?: Maybe<Wishlist_Items>;
  /** update multiples rows of table: "wishlist_items" */
  update_wishlist_items_many?: Maybe<Array<Maybe<Wishlist_Items_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Addresses_By_PkArgs = {
  address_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CartArgs = {
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cart_By_PkArgs = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_ProductsArgs = {
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Products_By_PkArgs = {
  order_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  order_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_ColorArgs = {
  where: Product_Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Color_By_PkArgs = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_Image_UrlsArgs = {
  where: Product_Image_Urls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Image_Urls_By_PkArgs = {
  image_url: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_RatingsArgs = {
  where: Product_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Ratings_By_PkArgs = {
  product_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_SizesArgs = {
  where: Product_Sizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Sizes_By_PkArgs = {
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubscribersArgs = {
  where: Subscribers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscribers_By_PkArgs = {
  uuid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  user_email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VerificationurlsArgs = {
  where: Verificationurls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verificationurls_By_PkArgs = {
  UUID: Scalars['String']['input'];
  verifyurl: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Wishlist_ItemsArgs = {
  where: Wishlist_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wishlist_Items_By_PkArgs = {
  product_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: InputMaybe<Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CartArgs = {
  objects: Array<Cart_Insert_Input>;
  on_conflict?: InputMaybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_OneArgs = {
  object: Cart_Insert_Input;
  on_conflict?: InputMaybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ProductsArgs = {
  objects: Array<Order_Products_Insert_Input>;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Products_OneArgs = {
  object: Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_ColorArgs = {
  objects: Array<Product_Color_Insert_Input>;
  on_conflict?: InputMaybe<Product_Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Color_OneArgs = {
  object: Product_Color_Insert_Input;
  on_conflict?: InputMaybe<Product_Color_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Image_UrlsArgs = {
  objects: Array<Product_Image_Urls_Insert_Input>;
  on_conflict?: InputMaybe<Product_Image_Urls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Image_Urls_OneArgs = {
  object: Product_Image_Urls_Insert_Input;
  on_conflict?: InputMaybe<Product_Image_Urls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_RatingsArgs = {
  objects: Array<Product_Ratings_Insert_Input>;
  on_conflict?: InputMaybe<Product_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Ratings_OneArgs = {
  object: Product_Ratings_Insert_Input;
  on_conflict?: InputMaybe<Product_Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_SizesArgs = {
  objects: Array<Product_Sizes_Insert_Input>;
  on_conflict?: InputMaybe<Product_Sizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Sizes_OneArgs = {
  object: Product_Sizes_Insert_Input;
  on_conflict?: InputMaybe<Product_Sizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubscribersArgs = {
  objects: Array<Subscribers_Insert_Input>;
  on_conflict?: InputMaybe<Subscribers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscribers_OneArgs = {
  object: Subscribers_Insert_Input;
  on_conflict?: InputMaybe<Subscribers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VerificationurlsArgs = {
  objects: Array<Verificationurls_Insert_Input>;
  on_conflict?: InputMaybe<Verificationurls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verificationurls_OneArgs = {
  object: Verificationurls_Insert_Input;
  on_conflict?: InputMaybe<Verificationurls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wishlist_ItemsArgs = {
  objects: Array<Wishlist_Items_Insert_Input>;
  on_conflict?: InputMaybe<Wishlist_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wishlist_Items_OneArgs = {
  object: Wishlist_Items_Insert_Input;
  on_conflict?: InputMaybe<Wishlist_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressesArgs = {
  _set?: InputMaybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _set?: InputMaybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Addresses_ManyArgs = {
  updates: Array<Addresses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CartArgs = {
  _inc?: InputMaybe<Cart_Inc_Input>;
  _set?: InputMaybe<Cart_Set_Input>;
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_By_PkArgs = {
  _inc?: InputMaybe<Cart_Inc_Input>;
  _set?: InputMaybe<Cart_Set_Input>;
  pk_columns: Cart_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_ManyArgs = {
  updates: Array<Cart_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ProductsArgs = {
  _set?: InputMaybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_By_PkArgs = {
  _set?: InputMaybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_ManyArgs = {
  updates: Array<Order_Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ColorArgs = {
  _set?: InputMaybe<Product_Color_Set_Input>;
  where: Product_Color_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Color_By_PkArgs = {
  _set?: InputMaybe<Product_Color_Set_Input>;
  pk_columns: Product_Color_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Color_ManyArgs = {
  updates: Array<Product_Color_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Image_UrlsArgs = {
  _set?: InputMaybe<Product_Image_Urls_Set_Input>;
  where: Product_Image_Urls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Image_Urls_By_PkArgs = {
  _set?: InputMaybe<Product_Image_Urls_Set_Input>;
  pk_columns: Product_Image_Urls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Image_Urls_ManyArgs = {
  updates: Array<Product_Image_Urls_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_RatingsArgs = {
  _inc?: InputMaybe<Product_Ratings_Inc_Input>;
  _set?: InputMaybe<Product_Ratings_Set_Input>;
  where: Product_Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Ratings_By_PkArgs = {
  _inc?: InputMaybe<Product_Ratings_Inc_Input>;
  _set?: InputMaybe<Product_Ratings_Set_Input>;
  pk_columns: Product_Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Ratings_ManyArgs = {
  updates: Array<Product_Ratings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_SizesArgs = {
  _set?: InputMaybe<Product_Sizes_Set_Input>;
  where: Product_Sizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Sizes_By_PkArgs = {
  _set?: InputMaybe<Product_Sizes_Set_Input>;
  pk_columns: Product_Sizes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Sizes_ManyArgs = {
  updates: Array<Product_Sizes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubscribersArgs = {
  _set?: InputMaybe<Subscribers_Set_Input>;
  where: Subscribers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribers_By_PkArgs = {
  _set?: InputMaybe<Subscribers_Set_Input>;
  pk_columns: Subscribers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscribers_ManyArgs = {
  updates: Array<Subscribers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VerificationurlsArgs = {
  _set?: InputMaybe<Verificationurls_Set_Input>;
  where: Verificationurls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verificationurls_By_PkArgs = {
  _set?: InputMaybe<Verificationurls_Set_Input>;
  pk_columns: Verificationurls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verificationurls_ManyArgs = {
  updates: Array<Verificationurls_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Wishlist_ItemsArgs = {
  _inc?: InputMaybe<Wishlist_Items_Inc_Input>;
  _set?: InputMaybe<Wishlist_Items_Set_Input>;
  where: Wishlist_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wishlist_Items_By_PkArgs = {
  _inc?: InputMaybe<Wishlist_Items_Inc_Input>;
  _set?: InputMaybe<Wishlist_Items_Set_Input>;
  pk_columns: Wishlist_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Wishlist_Items_ManyArgs = {
  updates: Array<Wishlist_Items_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** columns and relationships of "order_products" */
export type Order_Products = {
  color: Scalars['String']['output'];
  count: Scalars['String']['output'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['String']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

/** aggregated selection of "order_products" */
export type Order_Products_Aggregate = {
  aggregate?: Maybe<Order_Products_Aggregate_Fields>;
  nodes: Array<Order_Products>;
};

export type Order_Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Products_Aggregate_Bool_Exp_Count>;
};

export type Order_Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Products_Max_Fields>;
  min?: Maybe<Order_Products_Min_Fields>;
};


/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_products" */
export type Order_Products_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Products_Max_Order_By>;
  min?: InputMaybe<Order_Products_Min_Order_By>;
};

/** input type for inserting array relation for remote table "order_products" */
export type Order_Products_Arr_Rel_Insert_Input = {
  data: Array<Order_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};

/** Boolean expression to filter rows from the table "order_products". All fields are combined with a logical 'AND'. */
export type Order_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  _not?: InputMaybe<Order_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  count?: InputMaybe<String_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export type Order_Products_Constraint =
  /** unique or primary key constraint on columns "product_id", "order_id" */
  | 'order_products_pkey';

/** input type for inserting data into table "order_products" */
export type Order_Products_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Order_Products_Max_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "order_products" */
export type Order_Products_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Products_Min_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "order_products" */
export type Order_Products_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_products" */
export type Order_Products_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Products>;
};

/** on_conflict condition type for table "order_products" */
export type Order_Products_On_Conflict = {
  constraint: Order_Products_Constraint;
  update_columns?: Array<Order_Products_Update_Column>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "order_products". */
export type Order_Products_Order_By = {
  color?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_products */
export type Order_Products_Pk_Columns_Input = {
  order_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};

/** select columns of table "order_products" */
export type Order_Products_Select_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'count'
  /** column name */
  | 'order_id'
  /** column name */
  | 'product_id'
  /** column name */
  | 'size';

/** input type for updating data in table "order_products" */
export type Order_Products_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "order_products" */
export type Order_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Products_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "order_products" */
export type Order_Products_Update_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'count'
  /** column name */
  | 'order_id'
  /** column name */
  | 'product_id'
  /** column name */
  | 'size';

export type Order_Products_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Products_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  /** An object relationship */
  address: Addresses;
  address_id: Scalars['String']['output'];
  order_date: Scalars['timestamptz']['output'];
  order_id: Scalars['String']['output'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  shipping_method: Scalars['json']['output'];
  status: Scalars['String']['output'];
  total: Scalars['numeric']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersShipping_MethodArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  address?: InputMaybe<Addresses_Bool_Exp>;
  address_id?: InputMaybe<String_Comparison_Exp>;
  order_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_id?: InputMaybe<String_Comparison_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Bool_Exp>;
  shipping_method?: InputMaybe<Json_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  total?: InputMaybe<Numeric_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export type Orders_Constraint =
  /** unique or primary key constraint on columns "order_id" */
  | 'orders_pkey';

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  total?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  address?: InputMaybe<Addresses_Obj_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['timestamptz']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
  shipping_method?: InputMaybe<Scalars['json']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['numeric']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  address_id?: Maybe<Scalars['String']['output']>;
  order_date?: Maybe<Scalars['timestamptz']['output']>;
  order_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  address_id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  address_id?: Maybe<Scalars['String']['output']>;
  order_date?: Maybe<Scalars['timestamptz']['output']>;
  order_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['numeric']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  address_id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  address?: InputMaybe<Addresses_Order_By>;
  address_id?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  shipping_method?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  order_id: Scalars['String']['input'];
};

/** select columns of table "orders" */
export type Orders_Select_Column =
  /** column name */
  | 'address_id'
  /** column name */
  | 'order_date'
  /** column name */
  | 'order_id'
  /** column name */
  | 'shipping_method'
  /** column name */
  | 'status'
  /** column name */
  | 'total'
  /** column name */
  | 'user_id';

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  address_id?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['timestamptz']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  shipping_method?: InputMaybe<Scalars['json']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['String']['input']>;
  order_date?: InputMaybe<Scalars['timestamptz']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  shipping_method?: InputMaybe<Scalars['json']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['numeric']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  total?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export type Orders_Update_Column =
  /** column name */
  | 'address_id'
  /** column name */
  | 'order_date'
  /** column name */
  | 'order_id'
  /** column name */
  | 'shipping_method'
  /** column name */
  | 'status'
  /** column name */
  | 'total'
  /** column name */
  | 'user_id';

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  total?: InputMaybe<Order_By>;
};

/** columns and relationships of "product_color" */
export type Product_Color = {
  color: Scalars['String']['output'];
  hexcode: Scalars['String']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
};

/** aggregated selection of "product_color" */
export type Product_Color_Aggregate = {
  aggregate?: Maybe<Product_Color_Aggregate_Fields>;
  nodes: Array<Product_Color>;
};

export type Product_Color_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Color_Aggregate_Bool_Exp_Count>;
};

export type Product_Color_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Color_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Color_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_color" */
export type Product_Color_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Color_Max_Fields>;
  min?: Maybe<Product_Color_Min_Fields>;
};


/** aggregate fields of "product_color" */
export type Product_Color_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Color_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_color" */
export type Product_Color_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Color_Max_Order_By>;
  min?: InputMaybe<Product_Color_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_color" */
export type Product_Color_Arr_Rel_Insert_Input = {
  data: Array<Product_Color_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Color_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_color". All fields are combined with a logical 'AND'. */
export type Product_Color_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Color_Bool_Exp>>;
  _not?: InputMaybe<Product_Color_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Color_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  hexcode?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_color" */
export type Product_Color_Constraint =
  /** unique or primary key constraint on columns "product_id", "color" */
  | 'product_color_pkey';

/** input type for inserting data into table "product_color" */
export type Product_Color_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  hexcode?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Color_Max_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  hexcode?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "product_color" */
export type Product_Color_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  hexcode?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Color_Min_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  hexcode?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "product_color" */
export type Product_Color_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  hexcode?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_color" */
export type Product_Color_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Color>;
};

/** on_conflict condition type for table "product_color" */
export type Product_Color_On_Conflict = {
  constraint: Product_Color_Constraint;
  update_columns?: Array<Product_Color_Update_Column>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};

/** Ordering options when selecting data from "product_color". */
export type Product_Color_Order_By = {
  color?: InputMaybe<Order_By>;
  hexcode?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_color */
export type Product_Color_Pk_Columns_Input = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};

/** select columns of table "product_color" */
export type Product_Color_Select_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'hexcode'
  /** column name */
  | 'product_id';

/** input type for updating data in table "product_color" */
export type Product_Color_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  hexcode?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_color" */
export type Product_Color_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Color_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Color_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  hexcode?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_color" */
export type Product_Color_Update_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'hexcode'
  /** column name */
  | 'product_id';

export type Product_Color_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Color_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Color_Bool_Exp;
};

/** columns and relationships of "product_image_urls" */
export type Product_Image_Urls = {
  image_url: Scalars['String']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
};

/** aggregated selection of "product_image_urls" */
export type Product_Image_Urls_Aggregate = {
  aggregate?: Maybe<Product_Image_Urls_Aggregate_Fields>;
  nodes: Array<Product_Image_Urls>;
};

export type Product_Image_Urls_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Image_Urls_Aggregate_Bool_Exp_Count>;
};

export type Product_Image_Urls_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Image_Urls_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_image_urls" */
export type Product_Image_Urls_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Image_Urls_Max_Fields>;
  min?: Maybe<Product_Image_Urls_Min_Fields>;
};


/** aggregate fields of "product_image_urls" */
export type Product_Image_Urls_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_image_urls" */
export type Product_Image_Urls_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Image_Urls_Max_Order_By>;
  min?: InputMaybe<Product_Image_Urls_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_image_urls" */
export type Product_Image_Urls_Arr_Rel_Insert_Input = {
  data: Array<Product_Image_Urls_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Image_Urls_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_image_urls". All fields are combined with a logical 'AND'. */
export type Product_Image_Urls_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Image_Urls_Bool_Exp>>;
  _not?: InputMaybe<Product_Image_Urls_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Image_Urls_Bool_Exp>>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_image_urls" */
export type Product_Image_Urls_Constraint =
  /** unique or primary key constraint on columns "image_url", "product_id" */
  | 'product_image_urls_image_url_product_id_key'
  /** unique or primary key constraint on columns "image_url", "product_id" */
  | 'product_image_urls_pkey';

/** input type for inserting data into table "product_image_urls" */
export type Product_Image_Urls_Insert_Input = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Image_Urls_Max_Fields = {
  image_url?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "product_image_urls" */
export type Product_Image_Urls_Max_Order_By = {
  image_url?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Image_Urls_Min_Fields = {
  image_url?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "product_image_urls" */
export type Product_Image_Urls_Min_Order_By = {
  image_url?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_image_urls" */
export type Product_Image_Urls_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Image_Urls>;
};

/** on_conflict condition type for table "product_image_urls" */
export type Product_Image_Urls_On_Conflict = {
  constraint: Product_Image_Urls_Constraint;
  update_columns?: Array<Product_Image_Urls_Update_Column>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};

/** Ordering options when selecting data from "product_image_urls". */
export type Product_Image_Urls_Order_By = {
  image_url?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_image_urls */
export type Product_Image_Urls_Pk_Columns_Input = {
  image_url: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};

/** select columns of table "product_image_urls" */
export type Product_Image_Urls_Select_Column =
  /** column name */
  | 'image_url'
  /** column name */
  | 'product_id';

/** input type for updating data in table "product_image_urls" */
export type Product_Image_Urls_Set_Input = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_image_urls" */
export type Product_Image_Urls_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Image_Urls_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Image_Urls_Stream_Cursor_Value_Input = {
  image_url?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_image_urls" */
export type Product_Image_Urls_Update_Column =
  /** column name */
  | 'image_url'
  /** column name */
  | 'product_id';

export type Product_Image_Urls_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Image_Urls_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Image_Urls_Bool_Exp;
};

/** columns and relationships of "product_ratings" */
export type Product_Ratings = {
  avg_ratings: Scalars['float8']['output'];
  no_of_rated: Scalars['Int']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
};

/** aggregated selection of "product_ratings" */
export type Product_Ratings_Aggregate = {
  aggregate?: Maybe<Product_Ratings_Aggregate_Fields>;
  nodes: Array<Product_Ratings>;
};

/** aggregate fields of "product_ratings" */
export type Product_Ratings_Aggregate_Fields = {
  avg?: Maybe<Product_Ratings_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Ratings_Max_Fields>;
  min?: Maybe<Product_Ratings_Min_Fields>;
  stddev?: Maybe<Product_Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Ratings_Sum_Fields>;
  var_pop?: Maybe<Product_Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Ratings_Var_Samp_Fields>;
  variance?: Maybe<Product_Ratings_Variance_Fields>;
};


/** aggregate fields of "product_ratings" */
export type Product_Ratings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Product_Ratings_Avg_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "product_ratings". All fields are combined with a logical 'AND'. */
export type Product_Ratings_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Ratings_Bool_Exp>>;
  _not?: InputMaybe<Product_Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Ratings_Bool_Exp>>;
  avg_ratings?: InputMaybe<Float8_Comparison_Exp>;
  no_of_rated?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_ratings" */
export type Product_Ratings_Constraint =
  /** unique or primary key constraint on columns "product_id" */
  | 'product_ratings_pkey';

/** input type for incrementing numeric columns in table "product_ratings" */
export type Product_Ratings_Inc_Input = {
  avg_ratings?: InputMaybe<Scalars['float8']['input']>;
  no_of_rated?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_ratings" */
export type Product_Ratings_Insert_Input = {
  avg_ratings?: InputMaybe<Scalars['float8']['input']>;
  no_of_rated?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Ratings_Max_Fields = {
  avg_ratings?: Maybe<Scalars['float8']['output']>;
  no_of_rated?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Product_Ratings_Min_Fields = {
  avg_ratings?: Maybe<Scalars['float8']['output']>;
  no_of_rated?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "product_ratings" */
export type Product_Ratings_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Ratings>;
};

/** input type for inserting object relation for remote table "product_ratings" */
export type Product_Ratings_Obj_Rel_Insert_Input = {
  data: Product_Ratings_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Ratings_On_Conflict>;
};

/** on_conflict condition type for table "product_ratings" */
export type Product_Ratings_On_Conflict = {
  constraint: Product_Ratings_Constraint;
  update_columns?: Array<Product_Ratings_Update_Column>;
  where?: InputMaybe<Product_Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "product_ratings". */
export type Product_Ratings_Order_By = {
  avg_ratings?: InputMaybe<Order_By>;
  no_of_rated?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_ratings */
export type Product_Ratings_Pk_Columns_Input = {
  product_id: Scalars['String']['input'];
};

/** select columns of table "product_ratings" */
export type Product_Ratings_Select_Column =
  /** column name */
  | 'avg_ratings'
  /** column name */
  | 'no_of_rated'
  /** column name */
  | 'product_id';

/** input type for updating data in table "product_ratings" */
export type Product_Ratings_Set_Input = {
  avg_ratings?: InputMaybe<Scalars['float8']['input']>;
  no_of_rated?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Product_Ratings_Stddev_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Product_Ratings_Stddev_Pop_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Product_Ratings_Stddev_Samp_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "product_ratings" */
export type Product_Ratings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Ratings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Ratings_Stream_Cursor_Value_Input = {
  avg_ratings?: InputMaybe<Scalars['float8']['input']>;
  no_of_rated?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Product_Ratings_Sum_Fields = {
  avg_ratings?: Maybe<Scalars['float8']['output']>;
  no_of_rated?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "product_ratings" */
export type Product_Ratings_Update_Column =
  /** column name */
  | 'avg_ratings'
  /** column name */
  | 'no_of_rated'
  /** column name */
  | 'product_id';

export type Product_Ratings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Ratings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Ratings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Ratings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Ratings_Var_Pop_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Product_Ratings_Var_Samp_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Product_Ratings_Variance_Fields = {
  avg_ratings?: Maybe<Scalars['Float']['output']>;
  no_of_rated?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "product_sizes" */
export type Product_Sizes = {
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

/** aggregated selection of "product_sizes" */
export type Product_Sizes_Aggregate = {
  aggregate?: Maybe<Product_Sizes_Aggregate_Fields>;
  nodes: Array<Product_Sizes>;
};

export type Product_Sizes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Sizes_Aggregate_Bool_Exp_Count>;
};

export type Product_Sizes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Sizes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_sizes" */
export type Product_Sizes_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Sizes_Max_Fields>;
  min?: Maybe<Product_Sizes_Min_Fields>;
};


/** aggregate fields of "product_sizes" */
export type Product_Sizes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_sizes" */
export type Product_Sizes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Sizes_Max_Order_By>;
  min?: InputMaybe<Product_Sizes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "product_sizes" */
export type Product_Sizes_Arr_Rel_Insert_Input = {
  data: Array<Product_Sizes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Sizes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "product_sizes". All fields are combined with a logical 'AND'. */
export type Product_Sizes_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Sizes_Bool_Exp>>;
  _not?: InputMaybe<Product_Sizes_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Sizes_Bool_Exp>>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_sizes" */
export type Product_Sizes_Constraint =
  /** unique or primary key constraint on columns "product_id", "size" */
  | 'product_sizes_pkey';

/** input type for inserting data into table "product_sizes" */
export type Product_Sizes_Insert_Input = {
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Product_Sizes_Max_Fields = {
  product_id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "product_sizes" */
export type Product_Sizes_Max_Order_By = {
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Sizes_Min_Fields = {
  product_id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "product_sizes" */
export type Product_Sizes_Min_Order_By = {
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_sizes" */
export type Product_Sizes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Sizes>;
};

/** on_conflict condition type for table "product_sizes" */
export type Product_Sizes_On_Conflict = {
  constraint: Product_Sizes_Constraint;
  update_columns?: Array<Product_Sizes_Update_Column>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};

/** Ordering options when selecting data from "product_sizes". */
export type Product_Sizes_Order_By = {
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_sizes */
export type Product_Sizes_Pk_Columns_Input = {
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
};

/** select columns of table "product_sizes" */
export type Product_Sizes_Select_Column =
  /** column name */
  | 'product_id'
  /** column name */
  | 'size';

/** input type for updating data in table "product_sizes" */
export type Product_Sizes_Set_Input = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "product_sizes" */
export type Product_Sizes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Sizes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Sizes_Stream_Cursor_Value_Input = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "product_sizes" */
export type Product_Sizes_Update_Column =
  /** column name */
  | 'product_id'
  /** column name */
  | 'size';

export type Product_Sizes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Sizes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Sizes_Bool_Exp;
};

/** columns and relationships of "products" */
export type Products = {
  /** An object relationship */
  CategoryConstraint?: Maybe<Categories>;
  /** An array relationship */
  carts: Array<Cart>;
  /** An aggregate relationship */
  carts_aggregate: Cart_Aggregate;
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images: Scalars['String']['output'];
  mrp: Scalars['Int']['output'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  price: Scalars['numeric']['output'];
  /** An array relationship */
  product_colors: Array<Product_Color>;
  /** An aggregate relationship */
  product_colors_aggregate: Product_Color_Aggregate;
  /** An array relationship */
  product_image_urls: Array<Product_Image_Urls>;
  /** An aggregate relationship */
  product_image_urls_aggregate: Product_Image_Urls_Aggregate;
  /** An object relationship */
  product_rating?: Maybe<Product_Ratings>;
  /** An array relationship */
  product_sizes: Array<Product_Sizes>;
  /** An aggregate relationship */
  product_sizes_aggregate: Product_Sizes_Aggregate;
  title: Scalars['String']['output'];
  /** An array relationship */
  wishlist_items: Array<Wishlist_Items>;
  /** An aggregate relationship */
  wishlist_items_aggregate: Wishlist_Items_Aggregate;
};


/** columns and relationships of "products" */
export type ProductsCartsArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_ColorsArgs = {
  distinct_on?: InputMaybe<Array<Product_Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Color_Order_By>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Colors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Color_Order_By>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Image_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Image_Urls_Order_By>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Image_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Image_Urls_Order_By>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_SizesArgs = {
  distinct_on?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Sizes_Order_By>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsProduct_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Sizes_Order_By>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsWishlist_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsWishlist_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  CategoryConstraint?: InputMaybe<Categories_Bool_Exp>;
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  carts?: InputMaybe<Cart_Bool_Exp>;
  carts_aggregate?: InputMaybe<Cart_Aggregate_Bool_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  images?: InputMaybe<String_Comparison_Exp>;
  mrp?: InputMaybe<Int_Comparison_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_colors?: InputMaybe<Product_Color_Bool_Exp>;
  product_colors_aggregate?: InputMaybe<Product_Color_Aggregate_Bool_Exp>;
  product_image_urls?: InputMaybe<Product_Image_Urls_Bool_Exp>;
  product_image_urls_aggregate?: InputMaybe<Product_Image_Urls_Aggregate_Bool_Exp>;
  product_rating?: InputMaybe<Product_Ratings_Bool_Exp>;
  product_sizes?: InputMaybe<Product_Sizes_Bool_Exp>;
  product_sizes_aggregate?: InputMaybe<Product_Sizes_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  wishlist_items?: InputMaybe<Wishlist_Items_Bool_Exp>;
  wishlist_items_aggregate?: InputMaybe<Wishlist_Items_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "products" */
export type Products_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'products_pkey';

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  mrp?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  CategoryConstraint?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  carts?: InputMaybe<Cart_Arr_Rel_Insert_Input>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input']>;
  mrp?: InputMaybe<Scalars['Int']['input']>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  product_colors?: InputMaybe<Product_Color_Arr_Rel_Insert_Input>;
  product_image_urls?: InputMaybe<Product_Image_Urls_Arr_Rel_Insert_Input>;
  product_rating?: InputMaybe<Product_Ratings_Obj_Rel_Insert_Input>;
  product_sizes?: InputMaybe<Product_Sizes_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  wishlist_items?: InputMaybe<Wishlist_Items_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Scalars['String']['output']>;
  mrp?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Scalars['String']['output']>;
  mrp?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  CategoryConstraint?: InputMaybe<Categories_Order_By>;
  carts_aggregate?: InputMaybe<Cart_Aggregate_Order_By>;
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  mrp?: InputMaybe<Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  product_colors_aggregate?: InputMaybe<Product_Color_Aggregate_Order_By>;
  product_image_urls_aggregate?: InputMaybe<Product_Image_Urls_Aggregate_Order_By>;
  product_rating?: InputMaybe<Product_Ratings_Order_By>;
  product_sizes_aggregate?: InputMaybe<Product_Sizes_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  wishlist_items_aggregate?: InputMaybe<Wishlist_Items_Aggregate_Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "products" */
export type Products_Select_Column =
  /** column name */
  | 'category'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'images'
  /** column name */
  | 'mrp'
  /** column name */
  | 'price'
  /** column name */
  | 'title';

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input']>;
  mrp?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input']>;
  mrp?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  mrp?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export type Products_Update_Column =
  /** column name */
  | 'category'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'images'
  /** column name */
  | 'mrp'
  /** column name */
  | 'price'
  /** column name */
  | 'title';

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  mrp?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  mrp?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

export type Query_Root = {
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "product_color" */
  product_color: Array<Product_Color>;
  /** fetch aggregated fields from the table: "product_color" */
  product_color_aggregate: Product_Color_Aggregate;
  /** fetch data from the table: "product_color" using primary key columns */
  product_color_by_pk?: Maybe<Product_Color>;
  /** An array relationship */
  product_image_urls: Array<Product_Image_Urls>;
  /** An aggregate relationship */
  product_image_urls_aggregate: Product_Image_Urls_Aggregate;
  /** fetch data from the table: "product_image_urls" using primary key columns */
  product_image_urls_by_pk?: Maybe<Product_Image_Urls>;
  /** fetch data from the table: "product_ratings" */
  product_ratings: Array<Product_Ratings>;
  /** fetch aggregated fields from the table: "product_ratings" */
  product_ratings_aggregate: Product_Ratings_Aggregate;
  /** fetch data from the table: "product_ratings" using primary key columns */
  product_ratings_by_pk?: Maybe<Product_Ratings>;
  /** An array relationship */
  product_sizes: Array<Product_Sizes>;
  /** An aggregate relationship */
  product_sizes_aggregate: Product_Sizes_Aggregate;
  /** fetch data from the table: "product_sizes" using primary key columns */
  product_sizes_by_pk?: Maybe<Product_Sizes>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "subscribers" */
  subscribers: Array<Subscribers>;
  /** fetch aggregated fields from the table: "subscribers" */
  subscribers_aggregate: Subscribers_Aggregate;
  /** fetch data from the table: "subscribers" using primary key columns */
  subscribers_by_pk?: Maybe<Subscribers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  verificationurls: Array<Verificationurls>;
  /** An aggregate relationship */
  verificationurls_aggregate: Verificationurls_Aggregate;
  /** fetch data from the table: "verificationurls" using primary key columns */
  verificationurls_by_pk?: Maybe<Verificationurls>;
  /** An array relationship */
  wishlist_items: Array<Wishlist_Items>;
  /** An aggregate relationship */
  wishlist_items_aggregate: Wishlist_Items_Aggregate;
  /** fetch data from the table: "wishlist_items" using primary key columns */
  wishlist_items_by_pk?: Maybe<Wishlist_Items>;
};


export type Query_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  address_id: Scalars['String']['input'];
};


export type Query_RootCartArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Query_RootCart_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Query_RootCart_By_PkArgs = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_By_PkArgs = {
  order_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  order_id: Scalars['String']['input'];
};


export type Query_RootProduct_ColorArgs = {
  distinct_on?: InputMaybe<Array<Product_Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Color_Order_By>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


export type Query_RootProduct_Color_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Color_Order_By>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


export type Query_RootProduct_Color_By_PkArgs = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type Query_RootProduct_Image_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Image_Urls_Order_By>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


export type Query_RootProduct_Image_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Image_Urls_Order_By>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


export type Query_RootProduct_Image_Urls_By_PkArgs = {
  image_url: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type Query_RootProduct_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Product_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ratings_Order_By>>;
  where?: InputMaybe<Product_Ratings_Bool_Exp>;
};


export type Query_RootProduct_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ratings_Order_By>>;
  where?: InputMaybe<Product_Ratings_Bool_Exp>;
};


export type Query_RootProduct_Ratings_By_PkArgs = {
  product_id: Scalars['String']['input'];
};


export type Query_RootProduct_SizesArgs = {
  distinct_on?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Sizes_Order_By>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


export type Query_RootProduct_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Sizes_Order_By>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


export type Query_RootProduct_Sizes_By_PkArgs = {
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootSubscribersArgs = {
  distinct_on?: InputMaybe<Array<Subscribers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribers_Order_By>>;
  where?: InputMaybe<Subscribers_Bool_Exp>;
};


export type Query_RootSubscribers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribers_Order_By>>;
  where?: InputMaybe<Subscribers_Bool_Exp>;
};


export type Query_RootSubscribers_By_PkArgs = {
  uuid: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  user_email: Scalars['String']['input'];
};


export type Query_RootVerificationurlsArgs = {
  distinct_on?: InputMaybe<Array<Verificationurls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verificationurls_Order_By>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


export type Query_RootVerificationurls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verificationurls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verificationurls_Order_By>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


export type Query_RootVerificationurls_By_PkArgs = {
  UUID: Scalars['String']['input'];
  verifyurl: Scalars['String']['input'];
};


export type Query_RootWishlist_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};


export type Query_RootWishlist_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};


export type Query_RootWishlist_Items_By_PkArgs = {
  product_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

/** columns and relationships of "subscribers" */
export type Subscribers = {
  cart: Scalars['Boolean']['output'];
  favourite: Scalars['Boolean']['output'];
  newreleases: Scalars['Boolean']['output'];
  update: Scalars['Boolean']['output'];
  /** An object relationship */
  user: Users;
  uuid: Scalars['String']['output'];
};

/** aggregated selection of "subscribers" */
export type Subscribers_Aggregate = {
  aggregate?: Maybe<Subscribers_Aggregate_Fields>;
  nodes: Array<Subscribers>;
};

/** aggregate fields of "subscribers" */
export type Subscribers_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Subscribers_Max_Fields>;
  min?: Maybe<Subscribers_Min_Fields>;
};


/** aggregate fields of "subscribers" */
export type Subscribers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscribers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "subscribers". All fields are combined with a logical 'AND'. */
export type Subscribers_Bool_Exp = {
  _and?: InputMaybe<Array<Subscribers_Bool_Exp>>;
  _not?: InputMaybe<Subscribers_Bool_Exp>;
  _or?: InputMaybe<Array<Subscribers_Bool_Exp>>;
  cart?: InputMaybe<Boolean_Comparison_Exp>;
  favourite?: InputMaybe<Boolean_Comparison_Exp>;
  newreleases?: InputMaybe<Boolean_Comparison_Exp>;
  update?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  uuid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscribers" */
export type Subscribers_Constraint =
  /** unique or primary key constraint on columns "uuid" */
  | 'subscribers_pkey';

/** input type for inserting data into table "subscribers" */
export type Subscribers_Insert_Input = {
  cart?: InputMaybe<Scalars['Boolean']['input']>;
  favourite?: InputMaybe<Scalars['Boolean']['input']>;
  newreleases?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Subscribers_Max_Fields = {
  uuid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Subscribers_Min_Fields = {
  uuid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "subscribers" */
export type Subscribers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscribers>;
};

/** input type for inserting object relation for remote table "subscribers" */
export type Subscribers_Obj_Rel_Insert_Input = {
  data: Subscribers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscribers_On_Conflict>;
};

/** on_conflict condition type for table "subscribers" */
export type Subscribers_On_Conflict = {
  constraint: Subscribers_Constraint;
  update_columns?: Array<Subscribers_Update_Column>;
  where?: InputMaybe<Subscribers_Bool_Exp>;
};

/** Ordering options when selecting data from "subscribers". */
export type Subscribers_Order_By = {
  cart?: InputMaybe<Order_By>;
  favourite?: InputMaybe<Order_By>;
  newreleases?: InputMaybe<Order_By>;
  update?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscribers */
export type Subscribers_Pk_Columns_Input = {
  uuid: Scalars['String']['input'];
};

/** select columns of table "subscribers" */
export type Subscribers_Select_Column =
  /** column name */
  | 'cart'
  /** column name */
  | 'favourite'
  /** column name */
  | 'newreleases'
  /** column name */
  | 'update'
  /** column name */
  | 'uuid';

/** input type for updating data in table "subscribers" */
export type Subscribers_Set_Input = {
  cart?: InputMaybe<Scalars['Boolean']['input']>;
  favourite?: InputMaybe<Scalars['Boolean']['input']>;
  newreleases?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "subscribers" */
export type Subscribers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Subscribers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Subscribers_Stream_Cursor_Value_Input = {
  cart?: InputMaybe<Scalars['Boolean']['input']>;
  favourite?: InputMaybe<Scalars['Boolean']['input']>;
  newreleases?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "subscribers" */
export type Subscribers_Update_Column =
  /** column name */
  | 'cart'
  /** column name */
  | 'favourite'
  /** column name */
  | 'newreleases'
  /** column name */
  | 'update'
  /** column name */
  | 'uuid';

export type Subscribers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Subscribers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Subscribers_Bool_Exp;
};

export type Subscription_Root = {
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** fetch data from the table: "addresses" using primary key columns */
  addresses_by_pk?: Maybe<Addresses>;
  /** fetch data from the table in a streaming manner: "addresses" */
  addresses_stream: Array<Addresses>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>;
  /** fetch data from the table in a streaming manner: "cart" */
  cart_stream: Array<Cart>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** fetch data from the table in a streaming manner: "order_products" */
  order_products_stream: Array<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "product_color" */
  product_color: Array<Product_Color>;
  /** fetch aggregated fields from the table: "product_color" */
  product_color_aggregate: Product_Color_Aggregate;
  /** fetch data from the table: "product_color" using primary key columns */
  product_color_by_pk?: Maybe<Product_Color>;
  /** fetch data from the table in a streaming manner: "product_color" */
  product_color_stream: Array<Product_Color>;
  /** An array relationship */
  product_image_urls: Array<Product_Image_Urls>;
  /** An aggregate relationship */
  product_image_urls_aggregate: Product_Image_Urls_Aggregate;
  /** fetch data from the table: "product_image_urls" using primary key columns */
  product_image_urls_by_pk?: Maybe<Product_Image_Urls>;
  /** fetch data from the table in a streaming manner: "product_image_urls" */
  product_image_urls_stream: Array<Product_Image_Urls>;
  /** fetch data from the table: "product_ratings" */
  product_ratings: Array<Product_Ratings>;
  /** fetch aggregated fields from the table: "product_ratings" */
  product_ratings_aggregate: Product_Ratings_Aggregate;
  /** fetch data from the table: "product_ratings" using primary key columns */
  product_ratings_by_pk?: Maybe<Product_Ratings>;
  /** fetch data from the table in a streaming manner: "product_ratings" */
  product_ratings_stream: Array<Product_Ratings>;
  /** An array relationship */
  product_sizes: Array<Product_Sizes>;
  /** An aggregate relationship */
  product_sizes_aggregate: Product_Sizes_Aggregate;
  /** fetch data from the table: "product_sizes" using primary key columns */
  product_sizes_by_pk?: Maybe<Product_Sizes>;
  /** fetch data from the table in a streaming manner: "product_sizes" */
  product_sizes_stream: Array<Product_Sizes>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "subscribers" */
  subscribers: Array<Subscribers>;
  /** fetch aggregated fields from the table: "subscribers" */
  subscribers_aggregate: Subscribers_Aggregate;
  /** fetch data from the table: "subscribers" using primary key columns */
  subscribers_by_pk?: Maybe<Subscribers>;
  /** fetch data from the table in a streaming manner: "subscribers" */
  subscribers_stream: Array<Subscribers>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  verificationurls: Array<Verificationurls>;
  /** An aggregate relationship */
  verificationurls_aggregate: Verificationurls_Aggregate;
  /** fetch data from the table: "verificationurls" using primary key columns */
  verificationurls_by_pk?: Maybe<Verificationurls>;
  /** fetch data from the table in a streaming manner: "verificationurls" */
  verificationurls_stream: Array<Verificationurls>;
  /** An array relationship */
  wishlist_items: Array<Wishlist_Items>;
  /** An aggregate relationship */
  wishlist_items_aggregate: Wishlist_Items_Aggregate;
  /** fetch data from the table: "wishlist_items" using primary key columns */
  wishlist_items_by_pk?: Maybe<Wishlist_Items>;
  /** fetch data from the table in a streaming manner: "wishlist_items" */
  wishlist_items_stream: Array<Wishlist_Items>;
};


export type Subscription_RootAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  address_id: Scalars['String']['input'];
};


export type Subscription_RootAddresses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Addresses_Stream_Cursor_Input>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


export type Subscription_RootCartArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_By_PkArgs = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootCart_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cart_Stream_Cursor_Input>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_By_PkArgs = {
  order_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type Subscription_RootOrder_Products_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  order_id: Scalars['String']['input'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootProduct_ColorArgs = {
  distinct_on?: InputMaybe<Array<Product_Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Color_Order_By>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


export type Subscription_RootProduct_Color_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Color_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Color_Order_By>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


export type Subscription_RootProduct_Color_By_PkArgs = {
  color: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type Subscription_RootProduct_Color_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Color_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Color_Bool_Exp>;
};


export type Subscription_RootProduct_Image_UrlsArgs = {
  distinct_on?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Image_Urls_Order_By>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


export type Subscription_RootProduct_Image_Urls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Image_Urls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Image_Urls_Order_By>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


export type Subscription_RootProduct_Image_Urls_By_PkArgs = {
  image_url: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
};


export type Subscription_RootProduct_Image_Urls_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Image_Urls_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Image_Urls_Bool_Exp>;
};


export type Subscription_RootProduct_RatingsArgs = {
  distinct_on?: InputMaybe<Array<Product_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ratings_Order_By>>;
  where?: InputMaybe<Product_Ratings_Bool_Exp>;
};


export type Subscription_RootProduct_Ratings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Ratings_Order_By>>;
  where?: InputMaybe<Product_Ratings_Bool_Exp>;
};


export type Subscription_RootProduct_Ratings_By_PkArgs = {
  product_id: Scalars['String']['input'];
};


export type Subscription_RootProduct_Ratings_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Ratings_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Ratings_Bool_Exp>;
};


export type Subscription_RootProduct_SizesArgs = {
  distinct_on?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Sizes_Order_By>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


export type Subscription_RootProduct_Sizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Sizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Sizes_Order_By>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


export type Subscription_RootProduct_Sizes_By_PkArgs = {
  product_id: Scalars['String']['input'];
  size: Scalars['String']['input'];
};


export type Subscription_RootProduct_Sizes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Sizes_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Sizes_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootSubscribersArgs = {
  distinct_on?: InputMaybe<Array<Subscribers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribers_Order_By>>;
  where?: InputMaybe<Subscribers_Bool_Exp>;
};


export type Subscription_RootSubscribers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscribers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Subscribers_Order_By>>;
  where?: InputMaybe<Subscribers_Bool_Exp>;
};


export type Subscription_RootSubscribers_By_PkArgs = {
  uuid: Scalars['String']['input'];
};


export type Subscription_RootSubscribers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Subscribers_Stream_Cursor_Input>>;
  where?: InputMaybe<Subscribers_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  user_email: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerificationurlsArgs = {
  distinct_on?: InputMaybe<Array<Verificationurls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verificationurls_Order_By>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


export type Subscription_RootVerificationurls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verificationurls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verificationurls_Order_By>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


export type Subscription_RootVerificationurls_By_PkArgs = {
  UUID: Scalars['String']['input'];
  verifyurl: Scalars['String']['input'];
};


export type Subscription_RootVerificationurls_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verificationurls_Stream_Cursor_Input>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


export type Subscription_RootWishlist_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};


export type Subscription_RootWishlist_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};


export type Subscription_RootWishlist_Items_By_PkArgs = {
  product_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type Subscription_RootWishlist_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Wishlist_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Details of Users */
export type Users = {
  /** An array relationship */
  addresses: Array<Addresses>;
  /** An aggregate relationship */
  addresses_aggregate: Addresses_Aggregate;
  /** An array relationship */
  carts: Array<Cart>;
  /** An aggregate relationship */
  carts_aggregate: Cart_Aggregate;
  isverified: Scalars['Boolean']['output'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** An object relationship */
  subscriber?: Maybe<Subscribers>;
  unique_id: Scalars['String']['output'];
  user_email: Scalars['String']['output'];
  user_first_name: Scalars['String']['output'];
  user_last_name: Scalars['String']['output'];
  user_password: Scalars['String']['output'];
  user_pfp: Scalars['String']['output'];
  user_phone_number: Scalars['String']['output'];
  /** An array relationship */
  verificationurls: Array<Verificationurls>;
  /** An aggregate relationship */
  verificationurls_aggregate: Verificationurls_Aggregate;
  /** An array relationship */
  wishlist_items: Array<Wishlist_Items>;
  /** An aggregate relationship */
  wishlist_items_aggregate: Wishlist_Items_Aggregate;
};


/** Details of Users */
export type UsersAddressesArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


/** Details of Users */
export type UsersAddresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Addresses_Order_By>>;
  where?: InputMaybe<Addresses_Bool_Exp>;
};


/** Details of Users */
export type UsersCartsArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


/** Details of Users */
export type UsersCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cart_Order_By>>;
  where?: InputMaybe<Cart_Bool_Exp>;
};


/** Details of Users */
export type UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** Details of Users */
export type UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** Details of Users */
export type UsersVerificationurlsArgs = {
  distinct_on?: InputMaybe<Array<Verificationurls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verificationurls_Order_By>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


/** Details of Users */
export type UsersVerificationurls_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verificationurls_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verificationurls_Order_By>>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};


/** Details of Users */
export type UsersWishlist_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};


/** Details of Users */
export type UsersWishlist_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Wishlist_Items_Order_By>>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  addresses?: InputMaybe<Addresses_Bool_Exp>;
  addresses_aggregate?: InputMaybe<Addresses_Aggregate_Bool_Exp>;
  carts?: InputMaybe<Cart_Bool_Exp>;
  carts_aggregate?: InputMaybe<Cart_Aggregate_Bool_Exp>;
  isverified?: InputMaybe<Boolean_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  subscriber?: InputMaybe<Subscribers_Bool_Exp>;
  unique_id?: InputMaybe<String_Comparison_Exp>;
  user_email?: InputMaybe<String_Comparison_Exp>;
  user_first_name?: InputMaybe<String_Comparison_Exp>;
  user_last_name?: InputMaybe<String_Comparison_Exp>;
  user_password?: InputMaybe<String_Comparison_Exp>;
  user_pfp?: InputMaybe<String_Comparison_Exp>;
  user_phone_number?: InputMaybe<String_Comparison_Exp>;
  verificationurls?: InputMaybe<Verificationurls_Bool_Exp>;
  verificationurls_aggregate?: InputMaybe<Verificationurls_Aggregate_Bool_Exp>;
  wishlist_items?: InputMaybe<Wishlist_Items_Bool_Exp>;
  wishlist_items_aggregate?: InputMaybe<Wishlist_Items_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "user_email" */
  | 'users_pkey'
  /** unique or primary key constraint on columns "unique_id" */
  | 'users_unique_id_key';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  addresses?: InputMaybe<Addresses_Arr_Rel_Insert_Input>;
  carts?: InputMaybe<Cart_Arr_Rel_Insert_Input>;
  isverified?: InputMaybe<Scalars['Boolean']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  subscriber?: InputMaybe<Subscribers_Obj_Rel_Insert_Input>;
  unique_id?: InputMaybe<Scalars['String']['input']>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_first_name?: InputMaybe<Scalars['String']['input']>;
  user_last_name?: InputMaybe<Scalars['String']['input']>;
  user_password?: InputMaybe<Scalars['String']['input']>;
  user_pfp?: InputMaybe<Scalars['String']['input']>;
  user_phone_number?: InputMaybe<Scalars['String']['input']>;
  verificationurls?: InputMaybe<Verificationurls_Arr_Rel_Insert_Input>;
  wishlist_items?: InputMaybe<Wishlist_Items_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  unique_id?: Maybe<Scalars['String']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_first_name?: Maybe<Scalars['String']['output']>;
  user_last_name?: Maybe<Scalars['String']['output']>;
  user_password?: Maybe<Scalars['String']['output']>;
  user_pfp?: Maybe<Scalars['String']['output']>;
  user_phone_number?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  unique_id?: Maybe<Scalars['String']['output']>;
  user_email?: Maybe<Scalars['String']['output']>;
  user_first_name?: Maybe<Scalars['String']['output']>;
  user_last_name?: Maybe<Scalars['String']['output']>;
  user_password?: Maybe<Scalars['String']['output']>;
  user_pfp?: Maybe<Scalars['String']['output']>;
  user_phone_number?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  addresses_aggregate?: InputMaybe<Addresses_Aggregate_Order_By>;
  carts_aggregate?: InputMaybe<Cart_Aggregate_Order_By>;
  isverified?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  subscriber?: InputMaybe<Subscribers_Order_By>;
  unique_id?: InputMaybe<Order_By>;
  user_email?: InputMaybe<Order_By>;
  user_first_name?: InputMaybe<Order_By>;
  user_last_name?: InputMaybe<Order_By>;
  user_password?: InputMaybe<Order_By>;
  user_pfp?: InputMaybe<Order_By>;
  user_phone_number?: InputMaybe<Order_By>;
  verificationurls_aggregate?: InputMaybe<Verificationurls_Aggregate_Order_By>;
  wishlist_items_aggregate?: InputMaybe<Wishlist_Items_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  user_email: Scalars['String']['input'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'isverified'
  /** column name */
  | 'unique_id'
  /** column name */
  | 'user_email'
  /** column name */
  | 'user_first_name'
  /** column name */
  | 'user_last_name'
  /** column name */
  | 'user_password'
  /** column name */
  | 'user_pfp'
  /** column name */
  | 'user_phone_number';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  isverified?: InputMaybe<Scalars['Boolean']['input']>;
  unique_id?: InputMaybe<Scalars['String']['input']>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_first_name?: InputMaybe<Scalars['String']['input']>;
  user_last_name?: InputMaybe<Scalars['String']['input']>;
  user_password?: InputMaybe<Scalars['String']['input']>;
  user_pfp?: InputMaybe<Scalars['String']['input']>;
  user_phone_number?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  isverified?: InputMaybe<Scalars['Boolean']['input']>;
  unique_id?: InputMaybe<Scalars['String']['input']>;
  user_email?: InputMaybe<Scalars['String']['input']>;
  user_first_name?: InputMaybe<Scalars['String']['input']>;
  user_last_name?: InputMaybe<Scalars['String']['input']>;
  user_password?: InputMaybe<Scalars['String']['input']>;
  user_pfp?: InputMaybe<Scalars['String']['input']>;
  user_phone_number?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'isverified'
  /** column name */
  | 'unique_id'
  /** column name */
  | 'user_email'
  /** column name */
  | 'user_first_name'
  /** column name */
  | 'user_last_name'
  /** column name */
  | 'user_password'
  /** column name */
  | 'user_pfp'
  /** column name */
  | 'user_phone_number';

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** columns and relationships of "verificationurls" */
export type Verificationurls = {
  UUID: Scalars['String']['output'];
  /** An object relationship */
  user_verify: Users;
  verifyurl: Scalars['String']['output'];
};

/** aggregated selection of "verificationurls" */
export type Verificationurls_Aggregate = {
  aggregate?: Maybe<Verificationurls_Aggregate_Fields>;
  nodes: Array<Verificationurls>;
};

export type Verificationurls_Aggregate_Bool_Exp = {
  count?: InputMaybe<Verificationurls_Aggregate_Bool_Exp_Count>;
};

export type Verificationurls_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Verificationurls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Verificationurls_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "verificationurls" */
export type Verificationurls_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Verificationurls_Max_Fields>;
  min?: Maybe<Verificationurls_Min_Fields>;
};


/** aggregate fields of "verificationurls" */
export type Verificationurls_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verificationurls_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "verificationurls" */
export type Verificationurls_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Verificationurls_Max_Order_By>;
  min?: InputMaybe<Verificationurls_Min_Order_By>;
};

/** input type for inserting array relation for remote table "verificationurls" */
export type Verificationurls_Arr_Rel_Insert_Input = {
  data: Array<Verificationurls_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Verificationurls_On_Conflict>;
};

/** Boolean expression to filter rows from the table "verificationurls". All fields are combined with a logical 'AND'. */
export type Verificationurls_Bool_Exp = {
  UUID?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Verificationurls_Bool_Exp>>;
  _not?: InputMaybe<Verificationurls_Bool_Exp>;
  _or?: InputMaybe<Array<Verificationurls_Bool_Exp>>;
  user_verify?: InputMaybe<Users_Bool_Exp>;
  verifyurl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verificationurls" */
export type Verificationurls_Constraint =
  /** unique or primary key constraint on columns "UUID", "verifyurl" */
  | 'VerificationUrls_pkey'
  /** unique or primary key constraint on columns "verifyurl" */
  | 'VerificationUrls_verifyurl_key';

/** input type for inserting data into table "verificationurls" */
export type Verificationurls_Insert_Input = {
  UUID?: InputMaybe<Scalars['String']['input']>;
  user_verify?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  verifyurl?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Verificationurls_Max_Fields = {
  UUID?: Maybe<Scalars['String']['output']>;
  verifyurl?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "verificationurls" */
export type Verificationurls_Max_Order_By = {
  UUID?: InputMaybe<Order_By>;
  verifyurl?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Verificationurls_Min_Fields = {
  UUID?: Maybe<Scalars['String']['output']>;
  verifyurl?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "verificationurls" */
export type Verificationurls_Min_Order_By = {
  UUID?: InputMaybe<Order_By>;
  verifyurl?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "verificationurls" */
export type Verificationurls_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Verificationurls>;
};

/** on_conflict condition type for table "verificationurls" */
export type Verificationurls_On_Conflict = {
  constraint: Verificationurls_Constraint;
  update_columns?: Array<Verificationurls_Update_Column>;
  where?: InputMaybe<Verificationurls_Bool_Exp>;
};

/** Ordering options when selecting data from "verificationurls". */
export type Verificationurls_Order_By = {
  UUID?: InputMaybe<Order_By>;
  user_verify?: InputMaybe<Users_Order_By>;
  verifyurl?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verificationurls */
export type Verificationurls_Pk_Columns_Input = {
  UUID: Scalars['String']['input'];
  verifyurl: Scalars['String']['input'];
};

/** select columns of table "verificationurls" */
export type Verificationurls_Select_Column =
  /** column name */
  | 'UUID'
  /** column name */
  | 'verifyurl';

/** input type for updating data in table "verificationurls" */
export type Verificationurls_Set_Input = {
  UUID?: InputMaybe<Scalars['String']['input']>;
  verifyurl?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verificationurls" */
export type Verificationurls_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verificationurls_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verificationurls_Stream_Cursor_Value_Input = {
  UUID?: InputMaybe<Scalars['String']['input']>;
  verifyurl?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verificationurls" */
export type Verificationurls_Update_Column =
  /** column name */
  | 'UUID'
  /** column name */
  | 'verifyurl';

export type Verificationurls_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verificationurls_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verificationurls_Bool_Exp;
};

/** columns and relationships of "wishlist_items" */
export type Wishlist_Items = {
  /** An object relationship */
  product: Products;
  product_id: Scalars['String']['output'];
  sortid: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "wishlist_items" */
export type Wishlist_Items_Aggregate = {
  aggregate?: Maybe<Wishlist_Items_Aggregate_Fields>;
  nodes: Array<Wishlist_Items>;
};

export type Wishlist_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Wishlist_Items_Aggregate_Bool_Exp_Count>;
};

export type Wishlist_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Wishlist_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "wishlist_items" */
export type Wishlist_Items_Aggregate_Fields = {
  avg?: Maybe<Wishlist_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Wishlist_Items_Max_Fields>;
  min?: Maybe<Wishlist_Items_Min_Fields>;
  stddev?: Maybe<Wishlist_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Wishlist_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Wishlist_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Wishlist_Items_Sum_Fields>;
  var_pop?: Maybe<Wishlist_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Wishlist_Items_Var_Samp_Fields>;
  variance?: Maybe<Wishlist_Items_Variance_Fields>;
};


/** aggregate fields of "wishlist_items" */
export type Wishlist_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wishlist_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "wishlist_items" */
export type Wishlist_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Wishlist_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wishlist_Items_Max_Order_By>;
  min?: InputMaybe<Wishlist_Items_Min_Order_By>;
  stddev?: InputMaybe<Wishlist_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Wishlist_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Wishlist_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Wishlist_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Wishlist_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Wishlist_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Wishlist_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "wishlist_items" */
export type Wishlist_Items_Arr_Rel_Insert_Input = {
  data: Array<Wishlist_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Wishlist_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Wishlist_Items_Avg_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "wishlist_items" */
export type Wishlist_Items_Avg_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "wishlist_items". All fields are combined with a logical 'AND'. */
export type Wishlist_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Wishlist_Items_Bool_Exp>>;
  _not?: InputMaybe<Wishlist_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Wishlist_Items_Bool_Exp>>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<String_Comparison_Exp>;
  sortid?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "wishlist_items" */
export type Wishlist_Items_Constraint =
  /** unique or primary key constraint on columns "product_id", "user_id" */
  | 'wishlist_items_pkey';

/** input type for incrementing numeric columns in table "wishlist_items" */
export type Wishlist_Items_Inc_Input = {
  sortid?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "wishlist_items" */
export type Wishlist_Items_Insert_Input = {
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['String']['input']>;
  sortid?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Wishlist_Items_Max_Fields = {
  product_id?: Maybe<Scalars['String']['output']>;
  sortid?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "wishlist_items" */
export type Wishlist_Items_Max_Order_By = {
  product_id?: InputMaybe<Order_By>;
  sortid?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wishlist_Items_Min_Fields = {
  product_id?: Maybe<Scalars['String']['output']>;
  sortid?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "wishlist_items" */
export type Wishlist_Items_Min_Order_By = {
  product_id?: InputMaybe<Order_By>;
  sortid?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wishlist_items" */
export type Wishlist_Items_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Wishlist_Items>;
};

/** on_conflict condition type for table "wishlist_items" */
export type Wishlist_Items_On_Conflict = {
  constraint: Wishlist_Items_Constraint;
  update_columns?: Array<Wishlist_Items_Update_Column>;
  where?: InputMaybe<Wishlist_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "wishlist_items". */
export type Wishlist_Items_Order_By = {
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  sortid?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wishlist_items */
export type Wishlist_Items_Pk_Columns_Input = {
  product_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

/** select columns of table "wishlist_items" */
export type Wishlist_Items_Select_Column =
  /** column name */
  | 'product_id'
  /** column name */
  | 'sortid'
  /** column name */
  | 'user_id';

/** input type for updating data in table "wishlist_items" */
export type Wishlist_Items_Set_Input = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  sortid?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Wishlist_Items_Stddev_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "wishlist_items" */
export type Wishlist_Items_Stddev_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Wishlist_Items_Stddev_Pop_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "wishlist_items" */
export type Wishlist_Items_Stddev_Pop_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Wishlist_Items_Stddev_Samp_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "wishlist_items" */
export type Wishlist_Items_Stddev_Samp_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "wishlist_items" */
export type Wishlist_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wishlist_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wishlist_Items_Stream_Cursor_Value_Input = {
  product_id?: InputMaybe<Scalars['String']['input']>;
  sortid?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Wishlist_Items_Sum_Fields = {
  sortid?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "wishlist_items" */
export type Wishlist_Items_Sum_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** update columns of table "wishlist_items" */
export type Wishlist_Items_Update_Column =
  /** column name */
  | 'product_id'
  /** column name */
  | 'sortid'
  /** column name */
  | 'user_id';

export type Wishlist_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Wishlist_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Wishlist_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Wishlist_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Wishlist_Items_Var_Pop_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "wishlist_items" */
export type Wishlist_Items_Var_Pop_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Wishlist_Items_Var_Samp_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "wishlist_items" */
export type Wishlist_Items_Var_Samp_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Wishlist_Items_Variance_Fields = {
  sortid?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "wishlist_items" */
export type Wishlist_Items_Variance_Order_By = {
  sortid?: InputMaybe<Order_By>;
};

export type InsertVerificationurlsMutationVariables = Exact<{
  verifyurl: Scalars['String']['input'];
}>;


export type InsertVerificationurlsMutation = { update_users?: { affected_rows: number } | null };

export type UpdateMainverificationMutationVariables = Exact<{
  verifyurl: Scalars['String']['input'];
}>;


export type UpdateMainverificationMutation = { update_users?: { affected_rows: number } | null };

export type GetUserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDetailsQuery = { users: Array<{ user_email: string, unique_id: string, user_first_name: string, user_last_name: string, user_pfp: string, user_phone_number: string }> };

export type InsertVerifyUrlMutationVariables = Exact<{
  UUID: Scalars['String']['input'];
  verifyurl: Scalars['String']['input'];
}>;


export type InsertVerifyUrlMutation = { insert_verificationurls?: { affected_rows: number } | null };

export type UpdateinfoMutationVariables = Exact<{
  user_phone_number: Scalars['String']['input'];
  user_last_name: Scalars['String']['input'];
  user_first_name: Scalars['String']['input'];
  unique_id: Scalars['String']['input'];
}>;


export type UpdateinfoMutation = { update_users?: { affected_rows: number } | null };

export type UploadImageMutationVariables = Exact<{
  user_pfp: Scalars['String']['input'];
  unique_id: Scalars['String']['input'];
}>;


export type UploadImageMutation = { update_users?: { affected_rows: number } | null };

export type GetnoofitemsinCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetnoofitemsinCartQuery = { cart: Array<{ product_id: string }> };

export type GetUserImageQueryVariables = Exact<{
  mynum: Scalars['String']['input'];
}>;


export type GetUserImageQuery = { users: Array<{ user_pfp: string }> };

export type RetriveuserdataQueryVariables = Exact<{ [key: string]: never; }>;


export type RetriveuserdataQuery = { users: Array<{ user_first_name: string, user_phone_number: string, user_email: string, unique_id: string }> };

export type DeleteCartItemMutationVariables = Exact<{
  color: Scalars['String']['input'];
  size: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
}>;


export type DeleteCartItemMutation = { delete_cart?: { affected_rows: number } | null };

export type GetCartItemsQueryVariables = Exact<{
  color: Scalars['String']['input'];
  size: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
}>;


export type GetCartItemsQuery = { cart: Array<{ count: number, product_id: string, size: string, color: string }> };

export type UpdateCartMutationVariables = Exact<{
  color: Scalars['String']['input'];
  count: Scalars['Int']['input'];
  size: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
}>;


export type UpdateCartMutation = { update_cart?: { affected_rows: number } | null };

export type InsertintoCartMutationVariables = Exact<{
  color: Scalars['String']['input'];
  count: Scalars['Int']['input'];
  size: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  product_id: Scalars['String']['input'];
}>;


export type InsertintoCartMutation = { insert_cart_one?: { color: string, count: number, product_id: string, size: string, user_id: string } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { categories: Array<{ description: string, image: string, name: string }> };

export type IsProductLikedQueryVariables = Exact<{
  product_id: Scalars['String']['input'];
}>;


export type IsProductLikedQuery = { wishlist_items: Array<{ product_id: string, sortid: number, user_id: string }> };

export type InsertWishlistMutationVariables = Exact<{
  product_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
}>;


export type InsertWishlistMutation = { insert_wishlist_items_one?: { sortid: number, user_id: string, product_id: string } | null };

export type DeletefromWishlistMutationVariables = Exact<{
  product_id: Scalars['String']['input'];
}>;


export type DeletefromWishlistMutation = { delete_wishlist_items?: { affected_rows: number } | null };

export type SignupUserMutationVariables = Exact<{
  unique_id: Scalars['String']['input'];
  user_email: Scalars['String']['input'];
  user_first_name: Scalars['String']['input'];
  user_last_name: Scalars['String']['input'];
  user_password: Scalars['String']['input'];
  isverified: Scalars['Boolean']['input'];
}>;


export type SignupUserMutation = { insert_users_one?: { unique_id: string, user_email: string, user_first_name: string, user_last_name: string, isverified: boolean } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { products: Array<{ id: string, title: string, price: number, description: string, category: string, mrp: number, images: string, product_colors: Array<{ hexcode: string, color: string }>, product_image_urls: Array<{ image_url: string }>, product_sizes: Array<{ size: string }>, product_rating?: { no_of_rated: number, avg_ratings: any } | null }> };

export type IspasswordvalidQueryVariables = Exact<{
  user_password: Scalars['String']['input'];
}>;


export type IspasswordvalidQuery = { users: Array<{ unique_id: string }> };

export type GetMyCartitemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCartitemsQuery = { cart: Array<{ color: string, count: number, size: string, product_id: string, product: { images: string, price: number, title: string } }> };

export type UpdatePasswordMutationVariables = Exact<{
  user_password?: InputMaybe<Scalars['String']['input']>;
  user_email?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePasswordMutation = { update_users?: { affected_rows: number, returning: Array<{ user_first_name: string }> } | null };

export type GetuserprofilephotoSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetuserprofilephotoSubscription = { users: Array<{ user_pfp: string }> };

export type InsertimageMutationVariables = Exact<{
  image_url?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertimageMutation = { insert_product_image_urls_one?: { product_id: string, image_url: string } | null };

export type GetMyCartQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCartQuery = { cart: Array<{ color: string, count: number, product_id: string, size: string, product: { images: string, title: string, price: number } }> };

export type GetMyFavouriteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyFavouriteQuery = { wishlist_items: Array<{ product_id: string, product: { description: string, images: string, title: string } }> };

export type IsEmailExistsQueryVariables = Exact<{ [key: string]: never; }>;


export type IsEmailExistsQuery = { users: Array<{ user_email: string, isverified: boolean }> };

export type UserDetailswithpasswordQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailswithpasswordQuery = { users: Array<{ user_password: string, user_first_name: string, user_phone_number: string, user_email: string, unique_id: string }> };

export type GetVerificationUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVerificationUrlQuery = { verificationurls: Array<{ verifyurl: string, user_verify: { user_first_name: string } }> };

export type InsertAddressesMutationVariables = Exact<{
  active?: InputMaybe<Scalars['Boolean']['input']>;
  userid: Scalars['String']['input'];
  address1: Scalars['String']['input'];
  address2: Scalars['String']['input'];
  city: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  phoneno: Scalars['String']['input'];
  pincode: Scalars['String']['input'];
  region: Scalars['String']['input'];
  regionstate: Scalars['String']['input'];
}>;


export type InsertAddressesMutation = { insert_addresses?: { affected_rows: number, returning: Array<{ active: boolean, address1: string, address2: string, city: string, firstname: string, lastname: string, phoneno: string, pincode: string, region: string, regionstate: string, address_id: string, userid: string }> } | null };

export type InsertOrdersMutationVariables = Exact<{
  order_id: Scalars['String']['input'];
  address_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  total: Scalars['numeric']['input'];
  shipping_method: Scalars['json']['input'];
}>;


export type InsertOrdersMutation = { insert_orders?: { affected_rows: number, returning: Array<{ order_id: string, address_id: string, user_id: string, shipping_method: any, total: number }> } | null };

export type InsertOrderProductsMutationVariables = Exact<{
  orderProducts: Array<Order_Products_Insert_Input> | Order_Products_Insert_Input;
  user_id: Scalars['String']['input'];
}>;


export type InsertOrderProductsMutation = { insert_order_products?: { affected_rows: number, returning: Array<{ color: string, count: string, order_id: string, product_id: string, size: string }> } | null, delete_cart?: { affected_rows: number } | null };

export type GetAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAddressQuery = { addresses: Array<{ active: boolean, address1: string, address2: string, address_id: string, city: string, firstname: string, lastname: string, userid: string, regionstate: string, region: string, pincode: string, phoneno: string }> };

export type DeleteAddressMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAddressMutation = { update_addresses?: { affected_rows: number } | null };

export type UpdateAddressMutationVariables = Exact<{
  id: Scalars['String']['input'];
  updateobject: Addresses_Set_Input;
}>;


export type UpdateAddressMutation = { update_addresses?: { affected_rows: number } | null };

export type GetOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrdersQuery = { orders: Array<{ order_id: string, address_id: string, user_id: string, status: string, order_date: any, shipping_method: any, total: number, address: { address1: string, address2: string, city: string, firstname: string, lastname: string, phoneno: string, pincode: string, region: string, regionstate: string }, order_products: Array<{ color: string, count: string, order_id: string, product_id: string, size: string, product: { title: string, images: string, price: number } }> }> };

export type UpdateOrderStatusMutationVariables = Exact<{
  order_id: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type UpdateOrderStatusMutation = { update_orders?: { affected_rows: number } | null };

export type GetFavouriteSubscribersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavouriteSubscribersQuery = { users: Array<{ user_email: string, user_first_name: string, wishlist_items: Array<{ product_id: string, product: { description: string, id: string, images: string, title: string } }> }> };

export type GetSubscribedataQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetSubscribedataQuery = { users: Array<{ subscriber?: { favourite: boolean, update: boolean, newreleases: boolean, cart: boolean } | null }> };

export type UpdateSubscribedataMutationVariables = Exact<{
  email: Scalars['String']['input'];
  updateobject: Subscribers_Set_Input;
}>;


export type UpdateSubscribedataMutation = { update_subscribers?: { affected_rows: number } | null };

export type InsertUsersMutationVariables = Exact<{
  user: Array<Users_Insert_Input> | Users_Insert_Input;
}>;


export type InsertUsersMutation = { insert_users?: { affected_rows: number } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { users: Array<{ unique_id: string }> };

export type InsertMultipleWishlistMutationVariables = Exact<{
  obj: Array<Wishlist_Items_Insert_Input> | Wishlist_Items_Insert_Input;
  subs: Array<Subscribers_Insert_Input> | Subscribers_Insert_Input;
}>;


export type InsertMultipleWishlistMutation = { insert_wishlist_items?: { affected_rows: number } | null, insert_subscribers?: { affected_rows: number } | null };


export const InsertVerificationurlsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertVerificationurls"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyurl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verificationurls"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verifyurl"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyurl"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isverified"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertVerificationurlsMutation, InsertVerificationurlsMutationVariables>;
export const UpdateMainverificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMainverification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyurl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verificationurls"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"verifyurl"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyurl"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isverified"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateMainverificationMutation, UpdateMainverificationMutationVariables>;
export const GetUserDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"unique_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_last_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_pfp"}},{"kind":"Field","name":{"kind":"Name","value":"user_phone_number"}}]}}]}}]} as unknown as DocumentNode<GetUserDetailsQuery, GetUserDetailsQueryVariables>;
export const InsertVerifyUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertVerifyUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"UUID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyurl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_verificationurls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"UUID"},"value":{"kind":"Variable","name":{"kind":"Name","value":"UUID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"verifyurl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyurl"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertVerifyUrlMutation, InsertVerifyUrlMutationVariables>;
export const UpdateinfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Updateinfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_phone_number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unique_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_phone_number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_phone_number"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_last_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_first_name"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"unique_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unique_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateinfoMutation, UpdateinfoMutationVariables>;
export const UploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_pfp"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unique_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_pfp"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_pfp"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"unique_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unique_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UploadImageMutation, UploadImageMutationVariables>;
export const GetnoofitemsinCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetnoofitemsinCart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}}]}}]}}]} as unknown as DocumentNode<GetnoofitemsinCartQuery, GetnoofitemsinCartQueryVariables>;
export const GetUserImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mynum"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"1"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_not"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_pfp"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mynum"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_pfp"}}]}}]}}]} as unknown as DocumentNode<GetUserImageQuery, GetUserImageQueryVariables>;
export const RetriveuserdataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Retriveuserdata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"unique_id"}}]}}]}}]} as unknown as DocumentNode<RetriveuserdataQuery, RetriveuserdataQueryVariables>;
export const DeleteCartItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCartItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const GetCartItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCartItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<GetCartItemsQuery, GetCartItemsQueryVariables>;
export const UpdateCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateCartMutation, UpdateCartMutationVariables>;
export const InsertintoCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertintoCart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"color"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_cart_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"color"},"value":{"kind":"Variable","name":{"kind":"Name","value":"color"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<InsertintoCartMutation, InsertintoCartMutationVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"2"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const IsProductLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"isProductLiked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wishlist_items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"sortid"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<IsProductLikedQuery, IsProductLikedQueryVariables>;
export const InsertWishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertWishlist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_wishlist_items_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sortid"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}}]}}]}}]} as unknown as DocumentNode<InsertWishlistMutation, InsertWishlistMutationVariables>;
export const DeletefromWishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletefromWishlist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_wishlist_items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeletefromWishlistMutation, DeletefromWishlistMutationVariables>;
export const SignupUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignupUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unique_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isverified"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_first_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_last_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_password"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isverified"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isverified"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"unique_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unique_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unique_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_last_name"}},{"kind":"Field","name":{"kind":"Name","value":"isverified"}}]}}]}}]} as unknown as DocumentNode<SignupUserMutation, SignupUserMutationVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ttl"},"value":{"kind":"IntValue","value":"599"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"mrp"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"product_colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hexcode"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_image_urls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product_rating"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"no_of_rated"}},{"kind":"Field","name":{"kind":"Name","value":"avg_ratings"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const IspasswordvalidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Ispasswordvalid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_password"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_password"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unique_id"}}]}}]}}]} as unknown as DocumentNode<IspasswordvalidQuery, IspasswordvalidQueryVariables>;
export const GetMyCartitemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCartitems"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyCartitemsQuery, GetMyCartitemsQueryVariables>;
export const UpdatePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_email"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const GetuserprofilephotoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Getuserprofilephoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_pfp"}}]}}]}}]} as unknown as DocumentNode<GetuserprofilephotoSubscription, GetuserprofilephotoSubscriptionVariables>;
export const InsertimageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertimage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_product_image_urls_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image_url"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"product_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"product_id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"image_url"}}]}}]}}]} as unknown as DocumentNode<InsertimageMutation, InsertimageMutationVariables>;
export const GetMyCartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCart"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cart"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyCartQuery, GetMyCartQueryVariables>;
export const GetMyFavouriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyFavourite"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wishlist_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyFavouriteQuery, GetMyFavouriteQueryVariables>;
export const IsEmailExistsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsEmailExists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"isverified"}}]}}]}}]} as unknown as DocumentNode<IsEmailExistsQuery, IsEmailExistsQueryVariables>;
export const UserDetailswithpasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserDetailswithpassword"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_password"}},{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}},{"kind":"Field","name":{"kind":"Name","value":"user_phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"unique_id"}}]}}]}}]} as unknown as DocumentNode<UserDetailswithpasswordQuery, UserDetailswithpasswordQueryVariables>;
export const GetVerificationUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVerificationUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verificationurls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyurl"}},{"kind":"Field","name":{"kind":"Name","value":"user_verify"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}}]}}]}}]}}]} as unknown as DocumentNode<GetVerificationUrlQuery, GetVerificationUrlQueryVariables>;
export const InsertAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"active"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address1"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"city"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phoneno"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pincode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"regionstate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_addresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"Variable","name":{"kind":"Name","value":"active"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address1"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address1"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address2"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address2"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"city"},"value":{"kind":"Variable","name":{"kind":"Name","value":"city"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastname"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phoneno"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phoneno"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pincode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pincode"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"region"},"value":{"kind":"Variable","name":{"kind":"Name","value":"region"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"regionstate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"regionstate"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"phoneno"}},{"kind":"Field","name":{"kind":"Name","value":"pincode"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionstate"}},{"kind":"Field","name":{"kind":"Name","value":"address_id"}},{"kind":"Field","name":{"kind":"Name","value":"userid"}}]}}]}}]}}]} as unknown as DocumentNode<InsertAddressesMutation, InsertAddressesMutationVariables>;
export const InsertOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"total"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shipping_method"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"json"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"address_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"total"},"value":{"kind":"Variable","name":{"kind":"Name","value":"total"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"shipping_method"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shipping_method"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order_id"}},{"kind":"Field","name":{"kind":"Name","value":"address_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"shipping_method"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<InsertOrdersMutation, InsertOrdersMutationVariables>;
export const InsertOrderProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertOrderProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderProducts"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"order_products_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_order_products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderProducts"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"order_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_cart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user_id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertOrderProductsMutation, InsertOrderProductsMutationVariables>;
export const GetAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAddress"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"address_id"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"userid"}},{"kind":"Field","name":{"kind":"Name","value":"regionstate"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"pincode"}},{"kind":"Field","name":{"kind":"Name","value":"phoneno"}}]}}]}}]} as unknown as DocumentNode<GetAddressQuery, GetAddressQueryVariables>;
export const DeleteAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_addresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteAddressMutation, DeleteAddressMutationVariables>;
export const UpdateAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateobject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"addresses_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_addresses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"address_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateobject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateAddressMutation, UpdateAddressMutationVariables>;
export const GetOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrders"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order_id"}},{"kind":"Field","name":{"kind":"Name","value":"address_id"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address1"}},{"kind":"Field","name":{"kind":"Name","value":"address2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"phoneno"}},{"kind":"Field","name":{"kind":"Name","value":"pincode"}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"regionstate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"order_date"}},{"kind":"Field","name":{"kind":"Name","value":"shipping_method"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"order_products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"order_id"}},{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrdersQuery, GetOrdersQueryVariables>;
export const UpdateOrderStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrderStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>;
export const GetFavouriteSubscribersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFavouriteSubscribers"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"subscriber"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"favourite"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_email"}},{"kind":"Field","name":{"kind":"Name","value":"user_first_name"}},{"kind":"Field","name":{"kind":"Name","value":"wishlist_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product_id"}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFavouriteSubscribersQuery, GetFavouriteSubscribersQueryVariables>;
export const GetSubscribedataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSubscribedata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriber"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favourite"}},{"kind":"Field","name":{"kind":"Name","value":"update"}},{"kind":"Field","name":{"kind":"Name","value":"newreleases"}},{"kind":"Field","name":{"kind":"Name","value":"cart"}}]}}]}}]}}]} as unknown as DocumentNode<GetSubscribedataQuery, GetSubscribedataQueryVariables>;
export const UpdateSubscribedataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSubscribedata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateobject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"subscribers_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_subscribers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateobject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateSubscribedataMutation, UpdateSubscribedataMutationVariables>;
export const InsertUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"users_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertUsersMutation, InsertUsersMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"cached"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refresh"},"value":{"kind":"BooleanValue","value":true}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unique_id"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const InsertMultipleWishlistDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertMultipleWishlist"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"obj"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"wishlist_items_insert_input"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subs"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"subscribers_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_wishlist_items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"obj"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_subscribers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subs"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertMultipleWishlistMutation, InsertMultipleWishlistMutationVariables>;